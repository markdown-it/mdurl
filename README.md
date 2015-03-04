# mdurl

[![Build Status](https://img.shields.io/travis/markdown-it/mdurl/master.svg?style=flat)](https://travis-ci.org/markdown-it/mdurl)
[![NPM version](https://img.shields.io/npm/v/mdurl.svg?style=flat)](https://www.npmjs.org/package/mdurl)

URL utilities for [markdown-it](https://github.com/markdown-it/markdown-it) parser.

## API

### .encode(str [, exclude, keepEncoded])

Percent-encode a string, avoiding double encoding. Don't touch `/a-zA-Z0-9/` +
excluded chars + `/%[a-fA-F0-9]{2}/` (if not disabled).

Params:

- __str__ - input string.
- __exclude__ - optional, `;/?:@&=+$,-_.!~*'()#`. Additional chars (except
  `/a-zA-Z0-9/`) are kept intact.
- __keepEncoded__ - optional, `true`. By default it skips already encoded sequences
  (`/%[a-fA-F0-9]{2}/`). If set to `false`, `%` will always be encoded.

### encode.defaultChars, encode.componentChars

You can use these constants as second argument to `encode` function.

 - `encode.defaultChars` is the same exclude set as in the standard `encodeURI()` function
 - `encode.componentChars` is the same exclude set as in the `encodeURIComponent()` function

For example, `encode('something', encode.componentChars, true)` is roughly the equivalent of
the `encodeURIComponent()` function (except `encode()` doesn't throw).

### .decode(str [, exclude, reservedSet])

Decode percent-encoded string.

Params:

- __str__ - input string.
- __exclude__ - set of characters to leave encoded, optional, `;/?:@&=+$,#`.

Invalid percent-encoded sequences (e.g. `%2G`) are left as is, invalid UTF-8
characters are replaced with `U+FFFD`.

### decode.defaultChars, decode.componentChars

You can use these constants as second argument to `decode` function.

 - `decode.defaultChars` is the same exclude set as in the standard `decodeURI()` function
 - `decode.componentChars` is the same exclude set as in the `decodeURIComponent()` function

For example, `decode('something', decode.defaultChars)` has the same behavior as
`decodeURI('something')` on a correctly encoded input.

### .parse(url, slashesDenoteHost)

Parse url.

 - __url__ - input url (string)
 - __slashesDenoteHost__ - if url starts with `//`, expect a hostname after it. Optional, `false`.

### .format(urlObject)

Format an object previously obtained with `.parse()` function.

 - __urlObject__ - url to format


## License

[MIT](https://github.com/markdown-it/mdurl/blob/master/LICENSE)
