import assert from 'node:assert'
import { parse, format } from '../index.mjs'
import fixtures from './fixtures/url.mjs'

describe('format', () => {
  Object.keys(fixtures).forEach(url => {
    it(url, () => {
      const parsed = parse(url)
      assert.strictEqual(format(parsed), url)
    })
  })
})
