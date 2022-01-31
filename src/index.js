
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
   return [];
 }
  let newArr = [];
 for (let i = 0; i < matrix.length; i++) {
   if (i % 2 != 0) {
     matrix[i].reverse();
   }
 }
 return matrix.flat();
} 
//console.log(towelSort(matrix));  (matrix[0].concat(matrix[i%2 != 0].reverse().flat()))
//console.log