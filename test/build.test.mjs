import assert from 'node:assert'
import { createRequire } from 'node:module'
import { describe, it } from 'node:test'

const require = createRequire(import.meta.url)
const mdurl = require('mdurl')

describe('CJS', () => {
  it('require', () => {
    assert.ok(mdurl.parse)
    assert.ok(mdurl.format)
    assert.ok(mdurl.encode)
    assert.ok(mdurl.decode)
  })
})
