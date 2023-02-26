
// You should implement your task here.


module.exports = function towelSort (matrix) {
  const towelSortArr = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        i % 2 === 0 ? towelSortArr.push(matrix[i][j]) : 
        towelSortArr.push(matrix[i][matrix[i].length - 1 - j])
      }
    }
  }
  return towelSortArr;
}
