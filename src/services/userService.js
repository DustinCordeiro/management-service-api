const User = require("../models/User");
const { UnauthorizedError } = require("../erros/typeErros");
const tokenGenerate = require("../utils/tokenGenerate");
const { use } = require("../../routes");

async function userValidate(email, password) {
  email = email.toString().toLowerCase();
  let user = await User.findOne({ where: { email: email } });

  password = tokenGenerate.generatePasswordHash(password);

  if (!user || user.password !== password) {
    throw new UnauthorizedError(401, "User or password invalids");
  }

  let credential = _createCredential(user);

  return credential;
}

function _createCredential(user) {
  let token = tokenGenerate.createToken(user);
  user.password = undefined;

  let credential = { token, user };
  return credential;
}

module.exports = {
  userValidate,
};
