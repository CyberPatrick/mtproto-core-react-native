const pbkdf2 = require('pbkdf2')

async function PBKDF2(password, salt, iterations) {
  return new Promise((resolve, reject) => pbkdf2.pbkdf2(password, salt, iterations, 64, 'sha512',
      (err, out) => {
    if (err) reject(err);
    else resolve(out)
  }));
}

module.exports = PBKDF2;
