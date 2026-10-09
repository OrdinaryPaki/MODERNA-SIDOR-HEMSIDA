import assert from 'node:assert/strict';
import test from 'node:test';
import { deliverContactNotification } from '../src/lib/adapters/contact-mail.ts';
const request = { name: 'Anna Andersson', email: 'anna@example.com', projectInformation: 'Vi vill diskutera ett nytt affärssystem.', requestId: '6756251a-4ee6-482b-b694-d664726557df', website: '' };
function configure(t, key = 'test-placeholder') {
  const before = process.env.RESEND_API_KEY;
  if (key) process.env.RESEND_API_KEY = key; else delete process.env.RESEND_API_KEY;
  t.after(() => { if (before === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = before; });
}
test('without credentials no mail request leaves the server', async t => {
  configure(t, '');
  t.mock.method(globalThis, 'fetch', () => { assert.fail('Should not call the mail provider'); });
  assert.equal((await deliverContactNotification(request, 'business@modernasidor.se')).status, 'unavailable');
});
test('sends the inquiry to the configured business inbox with a reply address', async t => {
  configure(t);
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    const body = JSON.parse(options.body);
    assert.deepEqual(body.to, ['business@modernasidor.se']);
    assert.equal(body.from, 'Moderna Sidor <business@modernasidor.se>');
    assert.equal(body.reply_to, 'anna@example.com');
    assert.match(body.text, /Anna Andersson/);
    assert.match(body.text, /nytt affärssystem/);
    assert.ok(options.signal);
    return Response.json({ id: '49a3999c-0ce1-4ea6-ab68-afcd6dc2e794' });
  });
  assert.equal((await deliverContactNotification(request, 'business@modernasidor.se')).status, 'accepted');
});
test('retries reuse a delivery key while edited inquiries get a different key', async t => {
  configure(t);
  const keys = [];
  t.mock.method(globalThis, 'fetch', async (_, options) => {
    keys.push(options.headers['Idempotency-Key']);
    return Response.json({ id: '49a3999c-0ce1-4ea6-ab68-afcd6dc2e794' });
  });
  await deliverContactNotification(request, 'business@modernasidor.se');
  await deliverContactNotification(request, 'business@modernasidor.se');
  await deliverContactNotification({ ...request, projectInformation: 'Vi har ändrat vårt meddelande.' }, 'business@modernasidor.se');
  assert.equal(keys.length, 3);
  assert.match(keys[0], /^contact\//);
  assert.equal(keys[0], keys[1]);
  assert.notEqual(keys[0], keys[2]);
});
for (const [name, response] of [
  ['provider rejection', () => Response.json({ message: 'rejected' }, { status: 429 })],
  ['malformed acknowledgement', () => Response.json({})],
  ['network failure', () => { throw new Error('private provider diagnostic'); }],
]) {
  test(`${name} returns a safe failure, never success or provider details`, async t => {
    configure(t);
    t.mock.method(globalThis, 'fetch', response);
    assert.deepEqual(await deliverContactNotification(request, 'business@modernasidor.se'), { status: 'failed' });
  });
}
