const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getDNSStats(domains) {
  const dnsMap = {};

  // Loop through all domains
  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.').reverse();
    let subdomain = '';

    // Loop through all parts of the domain in reverse order
    for (let j = 0; j < domainParts.length; j++) {
      subdomain += `.${domainParts[j]}`;
      dnsMap[subdomain] = (dnsMap[subdomain] || 0) + 1;
    }
  }

  return dnsMap;
}

module.exports = {
  getDNSStats
};
