module.exports = function objectToArgv(obj) {
  if (typeof obj !== 'object' || !obj)
    obj = {}

  var keys = Object.keys(obj)
    , len = keys.length
    , out = []

  for (var i = 0; i < len; i++) {
    var key = keys[i]
    var val = obj[key]
    // skip null, undefined, or object/array
    if (typeof val === 'object' || val == null)
      continue

    if (key.length === 1)
      out.push('-' + key)
    else
      out.push('--' + key)

    if (typeof val !== 'boolean') {
      out.push(val)
    } else {
      // unshift since it is false
      // TODO(evanlucas) Maybe add option to prepend --no-
      // to arg
      if (!val)
        out.pop()
    }
  }

  return out
}
