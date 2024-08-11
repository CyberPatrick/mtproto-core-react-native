const crypto = require('expo-crypto');

async function SHA1(data) {
  data = new Uint8Array(data);

  const hash =  await crypto.digest(crypto.CryptoDigestAlgorithm.SHA1, data);

  return new Uint8Array(hash);
}

module.exports = SHA1;
