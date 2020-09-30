
exports.min = function min(array) {
  if (Array.isArray(array)) {
    let arr = array.sort(function (a, b) {
      return a - b;
    })
    if (arr.length > 0) {
      return arr[0]
    }
  }
  return 0;

}



exports.max = function max(array) {
  if (Array.isArray(array)) {
    let arr = array.sort((a, b) => {
      return a - b;
    })
    if (arr.length > 0) {
      return arr[arr.length - 1]
    }
  }
  return 0;
}

exports.avg = function avg(array) {
  if (Array.isArray(array) && array.length > 0) {
    let result = array.reduce((sum, cur) => {
      return sum + cur;
    })
    return result / array.length;
  }
  return 0;
}
