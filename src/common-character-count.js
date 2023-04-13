const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getCommonCharacterCount(s1, s2) {
  // Initialize an object to hold the character counts for s1
  const charCounts = {};

  // Loop through s1 and count the occurrence of each character
  for (const char of s1) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Initialize a variable to hold the total count of common characters
  let commonCount = 0;

  // Loop through s2 and decrement the count for any common characters
  for (const char of s2) {
    if (charCounts[char] > 0) {
      commonCount++;
      charCounts[char]--;
    }
  }

  // Return the total count of common characters
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
