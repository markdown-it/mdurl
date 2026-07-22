import assert from 'node:assert'
import { describe, it } from 'node:test'
import { parse, format } from 'mdurl'
import fixtures from './fixtures/url.mjs'

describe('format', () => {
  Object.keys(fixtures).forEach(url => {
    it(url, () => {
      const parsed = parse(url)
      assert.strictEqual(format(parsed), url)
    })
  })
})
