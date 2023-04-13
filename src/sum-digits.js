const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n;

  while (sum >= 10) {
    // Convert number to string so we can access each digit
    const digits = String(sum).split('');

    // Sum the digits
    sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
