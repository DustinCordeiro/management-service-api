const express = require("express");
const routes = express.Router();

const UserController = require("./src/controllers/UserController");
const userController = new UserController();

/**User routes */
routes.post("/users", userController.login);
routes.get("/users/:id", userController.getById);

module.exports = routes;
