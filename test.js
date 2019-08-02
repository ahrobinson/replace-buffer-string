const tap = require('tap');
const bufferReplace = require('./index');

tap.test('replaceFirst replaces the first occurrence of a character', test => {
  const originalBuffer = Buffer.from('himynameis');
  const expectedBuffer = Buffer.from('homynameis');
  test.deepEqual(
    bufferReplace.replaceFirst(originalBuffer, 'i', 'o'),
    expectedBuffer,
  );
  test.end();
});

tap.test('replaceLast replaces the last occurrence of a character', test => {
  const originalBuffer = Buffer.from('himynameis');
  const expectedBuffer = Buffer.from('himynameos');
  test.deepEqual(
    bufferReplace.replaceLast(originalBuffer, 'i', 'o'),
    expectedBuffer,
  );
  test.end();
});

tap.test('replaceAll replaces all occurrences of a character', test => {
  const originalBuffer = Buffer.from('himynameis');
  const expectedBuffer = Buffer.from('homynameos');
  test.deepEqual(
    bufferReplace.replaceAll(originalBuffer, 'i', 'o'),
    expectedBuffer,
  );
  test.end();
});