var linshiqiao = {
  chunk: function (array, size) {
    //错误思路 字符串拼接
    var arrays = []
    if (size == 0) {
      return array
    }
    var number = array.length / size
    function ceil(number) {
      var counter = 0
      while (number > 1) {
        number--
        counter++
      }
      if (number > 0) {
        counter++
      }
      return counter
    }
    number = ceil(number)
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
  }
}