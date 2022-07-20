const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const Profile =  require("../models/Profile");
const Users =  require("../models/User");

Profile.init(connection);
Users.init(connection);

module.exports = connection;
