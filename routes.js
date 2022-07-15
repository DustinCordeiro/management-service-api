const express = require("express");
const routes = express.Router();

const UserController = require("./src/controllers/UserController");
const userController = new UserController();

/**User routes */
routes.post("/user", userController.login);
routes.get("/user/:id", userController.getById);

module.exports = routes;
