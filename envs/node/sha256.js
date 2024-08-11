const crypto = require('expo-crypto');

async function SHA256(data) {
  data = new Uint8Array(data);

  const hash =  await crypto.digest(crypto.CryptoDigestAlgorithm.SHA256, data);

  return new Uint8Array(hash);
}

module.exports = SHA256;
