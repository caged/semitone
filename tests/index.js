const test = require('ava');
const foo = require('../build/semitone')

test('foo', t => {
  t.true(foo())
});