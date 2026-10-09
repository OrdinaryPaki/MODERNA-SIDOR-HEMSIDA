import assert from 'node:assert/strict';
import test from 'node:test';
const base = process.env.CONTACT_TEST_URL;
if (!base) throw new Error('Set CONTACT_TEST_URL to the local server without a mail API key.');
const valid = { name: 'Anna Andersson', email: 'anna@example.com', projectInformation: 'Vi vill diskutera ett nytt affärssystem.', requestId: '6756251a-4ee6-482b-b694-d664726557df', website: '' };
function send(body, headers = {}) {
  return fetch(new URL('/api/contact', base), { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: process.env.CONTACT_TEST_ORIGIN || new URL(base).origin, ...headers }, body: JSON.stringify(body) });
}
test('rejects cross-site submissions before delivery', async () => {
  assert.equal((await send(valid, { Origin: 'https://unrelated.example' })).status, 403);
});
for (const [name, change] of [
  ['invalid email', { email: 'not-an-email' }],
  ['email header injection', { email: 'anna@example.com\r\nBcc: other@example.com' }],
  ['empty message', { projectInformation: ' ' }],
  ['oversized message', { projectInformation: 'a'.repeat(10001) }],
  ['bad request identifier', { requestId: '../not-an-id' }],
  ['wrong input types', { name: { value: 'Anna' } }],
  ['spam trap', { website: 'https://spam.example' }],
]) {
  test(`rejects ${name} on the server`, async () => {
    assert.equal((await send({ ...valid, ...change })).status, 400);
  });
}
test('bounds the whole request body before parsing it', async () => {
  assert.equal((await send({ ...valid, padding: 'x'.repeat(70000) })).status, 413);
});
test('missing mail configuration reports failure and never claims delivery', { skip: process.env.CONTACT_TEST_EXPECT_UNCONFIGURED !== '1' }, async () => {
  const response = await send(valid);
  assert.equal(response.status, 503);
  assert.equal((await response.json()).status, 'unavailable');
  assert.match(response.headers.get('cache-control'), /no-store/);
});
