const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function deleteDigit(n) {
  // Convert the number to a string and split it into an array of digits
  const digits = n.toString().split('');

  // Initialize variables to hold the maximum number and its index
  let maxNum = Number.MIN_SAFE_INTEGER;
  let maxIndex = -1;

  // Loop through the digits and find the index of the smallest digit
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] < digits[i + 1]) {
      maxIndex = i;
      break;
    }
  }

  // If no smaller digit is found, delete the last digit
  if (maxIndex === -1) {
    digits.pop();
  } else {
    // Otherwise, delete the smallest digit
    digits.splice(maxIndex, 1);
  }

  // Convert the remaining digits back to a number and return it
  return parseInt(digits.join(''), 10);
}

module.exports = {
  deleteDigit
};
