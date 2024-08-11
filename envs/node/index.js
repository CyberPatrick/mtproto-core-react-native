const makeMTProto = require('../../src');
const SHA1 = require('./sha1');
const SHA256 = require('./sha256');
const PBKDF2 = require('./pbkdf2');
const Transport = require('./transport');
const getRandomBytes = require('./get-random-bytes');

function createTransport(dc, crypto) {
  return new Transport(dc, crypto);
}

const MTProto = makeMTProto({
  SHA1,
  SHA256,
  PBKDF2,
  getRandomBytes,
  createTransport,
});

module.exports = MTProto;
