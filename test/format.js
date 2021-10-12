/* global describe it */
'use strict';


import assert from 'assert';
import fixtures from './fixtures/url.js';
import parse from '../parse.js';
import format from '../format.js';

describe('format', function () {
  Object.keys(fixtures).forEach(function (url) {

    it(url, function () {
      const parsed = parse(url);

      assert.strictEqual(format(parsed), url);
    });

  });
});
