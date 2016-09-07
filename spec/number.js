'use strict';

const test = require('tape')

require('../out/jext.debug.js')

test('tap', t => {
  t.plan(1)

  const n = Math.PI
  t.equals(n.toMoney(), 3.14)
})

