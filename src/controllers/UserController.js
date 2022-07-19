const userService = require("../services/userService");
const { UnauthorizedError } = require("../erros/typeErros");

class UserController {
  async login(req, res) {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        throw new UnauthorizedError(401, "User or password invalids");
      }
      let credential = await userService.userValidate(email, password)
    } catch (e) {
      console.log(e)
    }
  }

  getById(req, res) {
    return res.json([{ id: 1, name: "Dave" }]);
  }

  create(req, res) {
    return;
  }

  update(req, res) {
    return;
  }

  disable(req, res) {
    return;
  }
}

module.exports = UserController;
