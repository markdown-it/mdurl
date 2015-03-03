# mdurl

[![Build Status](https://img.shields.io/travis/markdown-it/mdurl/master.svg?style=flat)](https://travis-ci.org/markdown-it/mdurl)
[![NPM version](https://img.shields.io/npm/v/mdurl.svg?style=flat)](https://www.npmjs.org/package/mdurl)

URL utilities for [markdown-it](https://github.com/markdown-it/markdown-it) parser.

## API

### .encode(str [, exclude, keepEncoded])

Percent encode string, avoiding double encoding. Don't touch `/a-zA-Z0-9/` +
excluded chars + `/%[a-fA-F0-9]{2}/` (if not disabled).

Params:

- __str__ - input string.
- __exclude__ - optional, `;/?:@&=+$,-_.!~*'()#`. Additional chars (except
  `/a-zA-Z0-9/`) to keep intact.
- __keepEncoded__ - optional, `true`. By default don't touch encoded sequences
  (`/%[a-fA-F0-9]{2}/`). If set `false`, then `%` will be encoded as normal char.

## .encode.defaultChars, encode.componentChars

For quick reference. Use to get exclude lists for js `encodeURI()` and
`encodeURICompoments()`.


## License

[MIT](https://github.com/markdown-it/mdurl/blob/master/LICENSE)
