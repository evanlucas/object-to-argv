var test = require('tap').test
  , convert = require('./')

test('it should work with non-object', function(t) {
  t.deepEqual(convert(null), [])
  t.deepEqual(convert(1), [])
  t.deepEqual(convert('a'), [])
  t.deepEqual(convert(false), [])
  t.end()
})

test('it should work with booleans', function(t) {
  var input = {
    name: 'evan'
  , debug: true
  }

  t.deepEqual(convert(input), [
    '--name'
  , 'evan'
  , '--debug'
  ])
  t.end()
})

test('it should skip null/undefined/objects', function(t) {
  var input = {
    name: 'evan'
  , debug: null
  , test: undefined
  , obj: {}
  }

  t.deepEqual(convert(input), [
    '--name'
  , 'evan'
  ])
  t.end()
})

test('it should work with shorthands', function(t) {
  var input = {
    name: 'evan'
  , d: true
  , f: false
  }

  t.deepEqual(convert(input), [
    '--name'
  , 'evan'
  , '-d'
  ])
  t.end()
})

test('it should work with alwaysSingle', function(t) {
  var input = {
    name: 'evan'
  , d: true
  , f: false
  }

  t.deepEqual(convert(input, {
    alwaysSingle: true
  }), [
    '-name'
  , 'evan'
  , '-d'
  ])
  t.end()
})

test('it should work with equalSign', function(t) {
  var input = {
    name: 'evan'
  , d: true
  , f: false
  }

  t.deepEqual(convert(input, {
    equalSign: true
  }), [
    '--name=evan'
  , '-d'
  ])
  t.end()
})

test('it should work with alwaysSingle and equalSign', function(t) {
  var input = {
    name: 'evan'
  , d: true
  , f: false
  }

  t.deepEqual(convert(input, {
    equalSign: true
  , alwaysSingle: true
  }), [
    '-name=evan'
  , '-d'
  ])
  t.end()
})
