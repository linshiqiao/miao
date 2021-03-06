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
  join: function (array, separator = ',') {
    var strs = ''
    array.forEach(it => strs += "" + separator + it)
    strs = strs.substring(1)
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
  pullAll: function (array, values) {
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
  union: function (arrays, ...args) {
    var ary = arrays
    args = linshiqiao.flattenDeep(args)
    for (var i in args) {
      if (!ary.includes(args[i])) {
        ary.push(args[i])
      }
    }
    return ary
  },
  uniq: function (array) {
    var arrays = []
    for (var i in array) {
      if (linshiqiao.indexOf(arrays, array[i]) == -1) {
        arrays.push(array[i])
      }
    }
    return arrays
  },
  unzip: function (...array) {
    array = array[0]
    length = array[0].length - 1
    var arrays = []
    for (var j = 0; j <= length; j++) {
      var ary = []
      for (var i = 0; i < array.length; i++) {
        ary.push(array[i][j])
      }
      arrays.push(ary)
    }
    return arrays
  },
  without: function (array, ...values) {
    var arrays = []
    for (var i in array) {
      for (var j = 0; j < values.length && array[i] != values[j]; j++) {

      }
      if (j == values.length) {
        arrays.push(array[i])
      }
    }
    return arrays
  },
  xor: function (...array) {
    var arrays = []
    var flattendeep = linshiqiao.flattenDeep(array)
    for (var i in flattendeep) {

      var flat = linshiqiao.flattenDeep(array)
      flat[i] = []
      if (linshiqiao.indexOf(flat, flattendeep[i]) == -1) {
        arrays.push(flattendeep[i])
      }
    }
    return arrays
  },
  zip: function (...array) {
    length = array.length - 1
    max = 0
    var arrays = []
    for (var i = 0; i <= length; i++) {
      max = Math.max(max, array[i].length - 1)
    }
    for (var j = 0; j <= max; j++) {
      var ary = []
      for (var i = 0; i <= length; i++) {
        ary.push(array[i][j])
      }
      arrays.push(ary)
    }
    return arrays
  },
  countBy: function (collection, iteratee) {
    var obj = {}
    for (var i = 0; i < collection.length; i++) {
      if (typeof (iteratee) == 'string') {
        if (!obj[collection[i][iteratee]]) {
          obj[collection[i][iteratee]] = 1
        } else {
          obj[collection[i][iteratee]]++
        }
      } else {
        if (!obj[iteratee(collection[i])]) {
          obj[iteratee(collection[i])] = 1
        } else {
          obj[iteratee(collection[i])]++
        }
      }
    }
    return obj
  },
  every: function (...collection) {
    collection = linshiqiao.flattenDeep(collection)
    for (var i in collection) {
      if (typeof (collection[i]) == 'object') {
        if (!collection[i]) {
          return false
        }
        for (var j in collection[i]) {
          if (!collection[i][j]) {
            return false
          }
        }
      } else {
        if (!collection[i]) {
          return false
        }
      }
    }
    return true
  },
}

