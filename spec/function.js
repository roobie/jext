'use strict';

const test = require('tape')

require('../out/jext.debug.js')

test('tap', t => {
  t.plan(2)

  const VAL = {p: 1}
  const handle = v => v.p;
  const promise = new Promise(resolve => resolve(VAL))
  let tval = null
  promise
    .then(handle.tap(v => tval = v))
    .then(p => {
      t.equal(tval, VAL)
      t.equal(p, VAL.p)
    })
})

