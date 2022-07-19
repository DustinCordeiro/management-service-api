const User = require("../models/Users");
const { UnauthorizedError } = require("../erros/typeErros");
const tokenGenerate = require("../utils/tokenGenerate");

async function userValidate(email, password) {
  email = email.toString().toLowerCase();
  let user = await User.findOne({ where: { email: email } });

  password = tokenGenerate.generatePasswordHash(password);

  if (!user || user.password !== password) {
    throw new UnauthorizedError(401, "User or password invalids");
  }

  console.log();
}

module.exports = {
  userValidate,
};
