const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  
  // Keep track of which columns contain a 0
  let zeroColumns = new Set();
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If this column contains a 0, skip it
      if (zeroColumns.has(col)) {
        continue;
      }
      
      let value = matrix[row][col];
      sum += value;
      
      // If this value is a 0, mark this column as containing a 0
      if (value === 0) {
        zeroColumns.add(col);
      }
    }
  }
  
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
