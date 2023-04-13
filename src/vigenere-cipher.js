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

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();

    let encrypted = '';
    let j = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const messageCharCode = messageUpper.charCodeAt(i);

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyCharCode = keyUpper.charCodeAt(j % keyUpper.length);
        const encryptedCharCode = ((messageCharCode + keyCharCode - 130) % 26) + 65;
        encrypted += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        encrypted += messageUpper[i];
      }
    }

    return this.direct ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();

    let decrypted = '';
    let j = 0;

    for (let i = 0; i < encryptedMessageUpper.length; i++) {
      const encryptedCharCode = encryptedMessageUpper.charCodeAt(i);

      if (encryptedCharCode >= 65 && encryptedCharCode <= 90) {
        const keyCharCode = keyUpper.charCodeAt(j % keyUpper.length);
        const decryptedCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        decrypted += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        decrypted += encryptedMessageUpper[i];
      }
    }

    return this.direct ? decrypted : decrypted.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
