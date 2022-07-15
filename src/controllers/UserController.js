class UserController {
  login(req, res) {
    return res.json({ message: "User or password invalid!" });
  }

  getById(req, res) {
    return res.json([{ id: 1, name: "Dave" }]);
  }

  create(req, res) {
    return
  }

  update(req, res) {
    return
  }

  disable(req, res) {
    return
  }
}

module.exports = UserController;
