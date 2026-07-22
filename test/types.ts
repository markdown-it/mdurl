import { decode, encode, format, parse, type Url } from 'mdurl'

const url: Url = parse('https://example.com/path', true)
const formatted: string = format(url)
const encoded: string = encode(formatted, encode.componentChars, true)
const decoded: string = decode(encoded, decode.componentChars)

void decoded
