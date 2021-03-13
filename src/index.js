
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(matrix === undefined || matrix.length === 0) {

      return [];

    } else {

      let mamatrixNumReverse = [];
      
      for(let i = 0; i < matrix.length; i++) {
          if(i === 0) {
              mamatrixNumReverse.push(matrix[i]); 
          } else if (i % 2 != 0) {
              mamatrixNumReverse.push(matrix[i].reverse());
          } else {
              mamatrixNumReverse.push(matrix[i]);
          }
      }

      let matrixStr = String(mamatrixNumReverse).split(',');
      let matrixNum =[];

      for(let i = 0; i < matrixStr.length; i++) {
          matrixNum.push(+matrixStr[i]);
      }

      return matrixNum;
    }

}
