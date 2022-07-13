
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (arguments.length === 0) return arr
  matrix.map((el, index) => index % 2 === 0 ? el : el.reverse()).forEach(el => arr.push(...el))
  console.log(arr)  
  return arr;
}
