
'use strict';


var assert   = require('assert');
var fixtures = require('./fixtures/url');
var parse    = require('../').parse;

describe('parse', function () {
  Object.keys(fixtures).forEach(function (url) {

    it(url, function () {
      var parsed = parse(url);

      Object.keys(parsed).forEach(function (x) {
        if (parsed[x] === null) { delete parsed[x]; }
      });

      assert.deepEqual(parsed, fixtures[url]);
    });

  });
});
