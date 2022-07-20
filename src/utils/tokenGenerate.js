const md5 = require("md5");
const SECRET = "GoodLucky";

function generatePasswordHash(password) {
  return md5(`$${password}${SECRET}!!`);
}

function createToken(user){
  let emailBase64 = Buffer.from(user.email).toString('base64');
  let date = new Date();

  let token = md5(`${emailBase64}.${SECRET}.${date}`)
  return token;
}

function expirationDate(){
  let date = new Date();
  let duration = process.env.DURATION_TOKEN * 60000;
  let expirationDate = new Date(date.getTime() + duration)
  return expirationDate;
}

module.exports = {
  generatePasswordHash,
};
