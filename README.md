# object-to-argv

[![Build Status](https://travis-ci.org/evanlucas/object-to-argv.svg)](https://travis-ci.org/evanlucas/object-to-argv)
[![Coverage Status](https://coveralls.io/repos/evanlucas/object-to-argv/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/object-to-argv?branch=master)

Convert an object to an array of arguments to pass to a cli process

## Install

```bash
$ npm install object-to-argv
```

## Test

```bash
$ npm test
```

## Coverage

```bash
$ npm test -- --cov
```

## API

#### objectToArgv(obj:Object, [opts:Object])

If `obj` is not an object, it is coerced to one.

`opts` can contain the following keys:

- `equalSign`: will format like `['--name=evan']` vs `['--name', 'evan']`
- `alwaysSingle`: will always use single dashes like `['-name', 'evan']`

## Example

```js
var convert = require('object-to-argv')
var input = {
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
var input = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input, {
  alwaysSingle: true
}))
// => [ '-name', 'evan', '-debug', '-b', '-n', 'evan' ]

// or use equalSign option
var input = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input, {
  equalSign: true
}))
// => [ '--name=evan', '--debug', '-b', '-n=evan' ]

// or use both options together
var input = {
  name: 'evan'
, debug: true
, verbose: false // will be ignored since it is a bool and false
, test: {}       // will be ignored since it is an object
, test: null     // will be ignored since it is null
, b: true        // single letters will only have a single dash
, n: 'evan'
}
console.log(convert(input, {
  alwaysSingle: true
, equalSign: true
}))
// => [ '-name=evan', '-debug', '-b', '-n=evan' ]
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
