let environment = undefined;

switch (process.env.PUBLISH) {
  case "HML":
    environment = configureHML();
    break;
  case "PROD":
    environment = configurePROD();
    break;
  default:
    environment = configureLOCAL();
    break;
}

function configureLOCAL() {
  return {
    dialect: process.env.LOCAL_DIALECT,
    host: process.env.LOCAL_HOST,
    port: process.env.LOCAL_PORT,
    username: process.env.LOCAL_USER_NAME,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_DATABASE,
    define: {
      timestamp: true,
      underscored: true,
    },
  };
}

function configureHML() {
  return {
    dialect: process.env.HML_DIALECT,
    host: process.env.HML_HOST,
    port: process.env.HML_PORT,
    username: process.env.HML_USER_NAME,
    password: process.env.HML_PASSWORD,
    database: process.env.HML_DATABASE,
    define: {
      timestamp: true,
      underscored: true,
    },
  };
}

function configurePROD() {
  return {
    dialect: process.env.PROD_DIALECT,
    host: process.env.PROD_HOST,
    port: process.env.PROD_PORT,
    username: process.env.PROD_USER_NAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    define: {
      timestamp: true,
      underscored: true,
    },
  };
}

module.exports = environment;
