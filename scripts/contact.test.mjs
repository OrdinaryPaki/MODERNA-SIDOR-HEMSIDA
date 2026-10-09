import assert from 'node:assert/strict';
import test from 'node:test';
import { requestProjectContact } from '../src/lib/contact-request.ts';

const valid = { name: 'Anna Andersson', email: 'anna@example.com', projectInformation: 'Vi vill diskutera ett nytt affärssystem.', requestId: '6756251a-4ee6-482b-b694-d664726557df', website: '' };

test('contact request reaches the server and reports its accepted result', async t => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, '/api/contact');
    assert.equal(options.method, 'POST');
    assert.deepEqual(JSON.parse(options.body), valid);
    return Response.json({ status: 'sent', message: 'Tack!' });
  });
  assert.equal((await requestProjectContact(valid)).status, 'sent');
});

test('a network failure never appears as a successful submission', async t => {
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('network'); });
  assert.equal((await requestProjectContact(valid)).status, 'failed');
});

test('an unexpected response never appears as a successful submission', async t => {
  t.mock.method(globalThis, 'fetch', async () => new Response('<html>bad gateway</html>', { status: 502 }));
  assert.equal((await requestProjectContact(valid)).status, 'failed');
});
