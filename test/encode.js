
'use strict';


var equals = require('assert').strictEqual;
var encode = require('../').encode;

describe('encode', function() {
  it('should encode percent', function() {
    equals(encode('%%%'), '%25%25%25');
  });

  it('should encode control chars', function() {
    equals(encode('\r\n'), '%0D%0A');
  });

  it('should not encode parts of an url', function() {
    equals(encode('?#'), '?#');
  });

  it('should not encode []^ - commonmark tests', function() {
    equals(encode('[]^'), '%5B%5D%5E');
  });

  it('should encode spaces', function() {
    equals(encode('my url'), 'my%20url');
  });

  it('should encode unicode', function() {
    equals(encode('φου'), '%CF%86%CE%BF%CF%85');
  });

  it('should encode % if it doesn\'t start a valid escape seq', function() {
    equals(encode('%FG'), '%25FG');
  });

  it('should preserve non-utf8 encoded characters', function() {
    equals(encode('%00%FF'), '%00%FF');
  });

  it('should encode characters on the cache borders', function() {
    // protects against off-by-one in cache implementation
    equals(encode('\x00\x7F\x80'), '%00%7F%C2%80');
  });

  describe('arguments', function() {
    it('encode(string, unescapedSet)', function() {
      equals(encode('!@#$', '@$'), '%21@%23$');
    });

    it('encode(string, keepEscaped=true)', function() {
      equals(encode('%20%2G', true), '%20%252G');
    });

    it('encode(string, keepEscaped=false)', function() {
      equals(encode('%20%2G', false), '%2520%252G');
    });

    it('encode(string, unescapedSet, keepEscaped)', function() {
      equals(encode('!@%25', '@', false), '%21@%2525');
    });
  });

  describe('surrogates', function() {
    it('bad surrogates (high)', function() {
      equals(encode('\uD800foo'), '%EF%BF%BDfoo');
      equals(encode('foo\uD800'), 'foo%EF%BF%BD');
    });

    it('bad surrogates (low)', function() {
      equals(encode('\uDD00foo'), '%EF%BF%BDfoo');
      equals(encode('foo\uDD00'), 'foo%EF%BF%BD');
    });

    it('valid one', function() {
      equals(encode('\uD800\uDD00'), '%F0%90%84%80');
    });
  });
});
