'use strict';

const test = require('tape')

require('../modules/array.js')

test('first', t => {
  t.plan(3)
  t.equal([].first(), void 0)
  t.equal([1].first(), 1)
  t.equal([1,2].first(), 1)
})

test('last', t => {
  t.plan(3)
  t.equal([].last(), void 0)
  t.equal([1].last(), 1)
  t.equal([1,2].last(), 2)
})

test('isEmpty', t => {
  t.plan(2)
  t.ok(![1].isEmpty())
  t.ok([].isEmpty())
})

test('skip/take', t => {
  t.plan(8)

  const src = [1, 2, 3, 4, 5];

  t.deepEquals(src.skip(1), [2, 3, 4, 5])
  t.deepEquals(src.skip(2), [3, 4, 5])
  t.deepEquals(src.skip(9), [])

  t.deepEquals(src.take(1), [1])
  t.deepEquals(src.take(2), [1, 2])
  t.deepEquals(src.take(9), src)

  t.deepEquals(src.skip(1).take(2), [2, 3])
  t.deepEquals(src.skip(4).take(2), [5])
})
