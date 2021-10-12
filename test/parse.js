/* global describe it */
'use strict';


import assert from 'assert';
import fixtures from './fixtures/url.js';
import parse from '../parse.js';

describe('parse', function () {
  Object.keys(fixtures).forEach(function (url) {

    it(url, function () {
      const parsed = parse(url);

      Object.keys(parsed).forEach(function (x) {
        if (parsed[x] === null) { delete parsed[x]; }
      });

      assert.deepEqual(parsed, fixtures[url]);
    });

  });
});
