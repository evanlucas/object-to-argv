'use strict'

module.exports = function objectToArgv(obj, opts) {
  if (typeof obj !== 'object' || !obj)
    obj = {}

  opts = opts || {}

  const keys = Object.keys(obj)
  const len = keys.length
  const out = []

  for (var i = 0; i < len; i++) {
    var key = keys[i]
    const val = obj[key]
    // skip null, undefined, or object/array
    if (typeof val === 'object' || val == null)
      continue

    if (opts.alwaysSingle || key.length === 1) {
      key = '-' + key
    } else {
      key = '--' + key
    }

    if (opts.equalSign) {
      if (typeof val !== 'boolean') {
        out.push(key + '=' + val)
      } else if (val) {
        out.push(key)
      }
    } else {
      out.push(key)
      if (typeof val !== 'boolean') {
        out.push(val)
      } else if (!val) {
        out.pop()
      }
    }
  }

  return out
}
