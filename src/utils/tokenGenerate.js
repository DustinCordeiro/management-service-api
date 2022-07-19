const md5 = require("md5");
const SECRET = "GoodLucky";

function generatePasswordHash(password) {
  return md5(`$${password}${SECRET}!!`);
}

module.exports = {
  generatePasswordHash,
};
