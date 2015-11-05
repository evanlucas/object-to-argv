# object-to-argv

[![Build Status](https://travis-ci.org/evanlucas/object-to-argv.svg)](https://travis-ci.org/evanlucas/object-to-argv)
[![Coverage Status](https://coveralls.io/repos/evanlucas/object-to-argv/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/object-to-argv?branch=master)

Convert an object to an array of arguments to pass to a cli process

*Note: `object-to-argv` is only supported on iojs and node v4+. To use with
an older version of node, please use `object-to-argv@1`.*

## Install

```bash
$ npm install object-to-argv
```

## Test

```bash
$ npm test
```

## API

#### objectToArgv(obj:Object, [opts:Object])

If `obj` is not an object, it is coerced to one.

`opts` can contain the following keys:

- `equalSign`: will format like `['--name=evan']` vs `['--name', 'evan']`
- `alwaysSingle`: will always use single dashes like `['-name', 'evan']`

## Example

```js
const convert = require('object-to-argv')
const input = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input))
// => [ '--name', 'evan', '--debug', '-b', '-n', 'evan' ]

// or use alwaysSingle option
const input2 = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input2, {
  alwaysSingle: true
}))
// => [ '-name', 'evan', '-debug', '-b', '-n', 'evan' ]

// or use equalSign option
const input3 = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input3, {
  equalSign: true
}))
// => [ '--name=evan', '--debug', '-b', '-n=evan' ]

// or use both options together
const input4 = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input4, {
  alwaysSingle: true
, equalSign: true
}))
// => [ '-name=evan', '-debug', '-b', '-n=evan' ]
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
