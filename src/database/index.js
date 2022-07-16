const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const Profile =  require("../models/Profile");
const Users =  require("../models/Users");

Profile.init(connection);
Users.init(connection);

module.exports = connection;
