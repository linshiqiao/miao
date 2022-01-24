var linshiqiao = {
  chunk: function (array, size) {
    //错误思路 字符串拼接
    var arrays = []
    if (size == 0) {
      return array
    }
    var number = array.length / size
    number = Math.ceil(number)
    var point = 1
    var cut = 0
    for (var i = 0; i < number; i++) {
      var ary = []
      while (point - cut <= size && point <= array.length) {
        ary.push(array[(point++) - 1])
      }
      arrays.push(ary)
      cut += size
    }
    return arrays
  },
  compact: function (array) {
    var arrays = []
    for (var i in array) {
      if (array[i] != false && array[i] != null && array[i] != 0 && array[i] != "" && array[i] != undefined && array[i] == array[i]) {
        arrays.push(array[i])
      }
    }
    return arrays
  },
  concat: function (array, ...ary) {
    if (arguments.length == 1) {
      return array
    } else {
      for (var i in ary) {
        var property = ary[i]
        if (Array.isArray(property)) {
          for (var j in property) {
            array.push(property[j])
          }
        } else {
          array.push(property)
        }
      }
    }
    return array
  },
  difference: function (array, ...ary) {
    var arrays = []
    for (var i in array) {
      var judge = true
      ary.forEach((value) => {
        for (var j in value) {
          if (array[i] == value[j]) {
            judge = false
            break
          }
        }

      })
      if (judge) {
        arrays.push(array[i])
      }
    }
    return arrays
  },

  drop: function (array, n = 1) {
    if (n > array.length - 1) {
      return []
    } else {
      var arrays = []
      for (var i = n; i < array.length; i++) {
        arrays.push(array[i])
      }
      return arrays
    }
  },
  dropRight: function (array, n = 1) {
    if (n > array.length - 1) {
      return []
    } else {
      var arrays = []
      for (var i = 0; i < array.length - n; i++) {
        arrays.push(array[i])
      }
      return arrays
    }
  },
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },
  flatten: function (array) {
    return [].concat(...array)
  },
  flattenDeep: function (array, arrays = []) {
    for (var i in array) {
      if (Array.isArray(array[i])) {
        linshiqiao.flattenDeep(linshiqiao.flatten(array[i]), arrays)

      } else {
        arrays.push(array[i])
      }
    }
    return arrays
  },
  flattenDepth: function (array, depth = 1) {
    var arrays = array
    if (depth == 0) {
      return array
    }
    while (depth >= 1) {
      var judge = true
      arrays = linshiqiao.flatten(arrays)
      depth--
      for (var i in arrays) {
        if (Array.isArray(arrays[i])) {
          judge = false
          break
        }
      }
      if (judge) {
        break
      }
    }
    return arrays
  },
  fromPairs: function (pairs) {
    var obj = {}
    pairs = linshiqiao.flattenDeep(pairs)
    for (var i = 0; i < pairs.length; i += 2) {
      var nature = pairs[i]
      obj[nature] = pairs[i + 1]
    }
    return obj
  },
  head: function (array) {
    return array[0]
  },
  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  initial: function (array) {
    return array.slice(0, array.length - 1)
  },
  intersection: function (arrays) {
    var array = []
    for (var i in arrays) {
      for (var j = 1; j < arguments.length; j++) {

        if (linshiqiao.indexOf(arguments[j], arrays[i]) == -1) {
          break
        }
      }
      if (linshiqiao.indexOf(arguments[j - 1], arrays[i]) != -1 && j == arguments.length) {
        array.push(arrays[i])
      }
    }
    return array
  },
  join: function (array, str) {
    var strs = ''
    array.forEach(it => strs += it + str)
    strs.substring(0, a.length - 1)
    return strs
  },
  last: function (array) {
    return array[array.length - 1]
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },
  pull: function (array, ...values) {
    var counter = 0
    for (var i in array) {
      for (var j = 0; j < values.length && array[i] != values[j]; j++) {

      }
      if (j == values.length) {
        array[counter++] = array[i]
      }
    }
    array.length = counter
    return array
  },
  pullAll: function (array, ...values) {
    var counter = 0
    values = linshiqiao.flattenDeep(values)
    for (var i in array) {
      for (var j = 0; j < values.length && array[i] != values[j]; j++) {

      }
      if (j == values.length) {
        array[counter++] = array[i]
      }
    }
    array.length = counter
    return array
  },
  reverse: function (array) {
    var counter = array.length - 1
    for (var i = 0; i < array.length && i < counter; i++) {
      var number = array[i]
      array[i] = array[counter]
      array[counter--] = number
    }
    return array
  },
  slice: function (array, start = 0, end = array.length) {
    var counter = 0
    for (var i = start; i < end; i++) {
      array[counter++] = array[i]
    }
    array.length = counter
    return array
  },
}

