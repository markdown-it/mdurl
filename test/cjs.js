'use strict'
/* eslint-env mocha */

const mdurl = require('../')
const assert = require('assert')

describe('CJS', () => {
  it('require', () => {
    assert.ok(mdurl.parse)
    assert.ok(mdurl.format)
    assert.ok(mdurl.encode)
    assert.ok(mdurl.decode)
  })
})
