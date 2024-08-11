const crypto = require('expo-crypto');

function getRandomBytes(length) {
  return crypto.getRandomValues(new Uint8Array(length));
}

module.exports = getRandomBytes;
