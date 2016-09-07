'use strict';

const test = require('tape')

require('../out/jext.debug.js')

test('contains', t => {
  t.plan(4)

  t.ok('foo'.contains(''))
  t.ok('foo'.contains('fo'))
  t.ok('foo'.contains('oo'))
  t.false('foo'.contains('no go'))
})

test('words', t => {
  t.plan(3)

  const sentence = 'This is a sentence.'
  t.equal(sentence.words().length, 4)
  t.equal(sentence.words().first(), 'This')
  t.equal(sentence.words().last(), 'sentence.')
})
