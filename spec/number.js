'use strict';

const test = require('tape')

require('../modules/number.js')

test('toMoney', t => {
  t.plan(1)

  const n = Math.PI
  t.equals(n.toMoney(), 3.14)
})

