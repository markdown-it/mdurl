
'use strict';


var assert   = require('assert');
var fixtures = require('./fixtures/url');
var parse    = require('../').parse;
var format   = require('../').format;

describe('format', function() {
  Object.keys(fixtures).forEach(function(url) {

    it(url, function() {
      var parsed = parse(url);

      assert.strictEqual(format(parsed), url);
    });

  });
});
