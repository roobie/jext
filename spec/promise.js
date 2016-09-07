'use strict';

const test = require('tape')

require('../out/jext.debug.js')

test('tap', t => {
  t.plan(1)

  const VAL = {p: 1}
  const promise = new Promise(resolve => resolve(VAL))
  let tval = null
  promise.tap(v => {
    tval = v
    return null;
  }).then(v => t.equals(v, VAL))
})

