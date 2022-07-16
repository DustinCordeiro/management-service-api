const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

import Profile from "../models/Profile";

Profile.init(connection);

module.exports = connection;
