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
  difference: function (array, values) {
    var arrays = []
    for (var i in array) {
      var judge = true
      for (var j in values) {
        if (array[i] == values[j]) {
          judge = false
          break
        }
      }
      if (judge) {
        arrays.push(array[i])
      }
    }
    return arrays
  }
}
