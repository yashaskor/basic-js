const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _normalizeString(str) {
    return str.toUpperCase().replace(/[^A-Z]/g, '');
  }

  _repeatKey(key, length) {
    if (key.length >= length) {
      return key.slice(0, length);
    }
    let repeatedKey = key;
    while (repeatedKey.length < length) {
      repeatedKey += key;
    }
    return repeatedKey.slice(0, length);
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const normalizedMessage = this._normalizeString(message);
    const normalizedKey = this._normalizeString(key);
    const repeatedKey = this._repeatKey(normalizedKey, normalizedMessage.length);
    let result = '';
    for (let i = 0; i < normalizedMessage.length; i++) {
      const charCode = ((normalizedMessage.charCodeAt(i) + repeatedKey.charCodeAt(i)) % 26) + 65;
      result += String.fromCharCode(charCode);
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const normalizedMessage = this._normalizeString(encryptedMessage);
    const normalizedKey = this._normalizeString(key);
    const repeatedKey = this._repeatKey(normalizedKey, normalizedMessage.length);
    let result = '';
    for (let i = 0; i < normalizedMessage.length; i++) {
      const charCode = ((normalizedMessage.charCodeAt(i) - repeatedKey.charCodeAt(i) + 26) % 26) + 65;
      result += String.fromCharCode(charCode);
    }
    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
