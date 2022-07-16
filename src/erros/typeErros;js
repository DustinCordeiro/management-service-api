const InvalidModelErro = class InvalidModelErro {
  /**
   * Class used to exceptions of models and dtos
   * @param {Number} status
   * @param {String} message
   */

  constructor(status, message) {
    this.status = status || 400;
    this.message = message || "Model informed invalid";
    this.name = "InvalidModel";
    this.stack = new Error().stack;
  }
};

const UnauthorizedError = class UnauthorizedError {
  /**
   * Class used to exceptions of access or resources not authorized
   * @param {Number} status
   * @param {String} message
   */

  constructor(status, message) {
    this.status = status || 403;
    this.message = message || "Resource not authorized";
    this.name = "Unauthorized";
    this.stack = new Error().stack;
  }
};

const NotFoundError = class NotFoundError {
  /**
   * Class used to exceptions of access or resources not found
   * @param {Number} status
   * @param {String} message
   */

  constructor(status, message) {
    this.status = status || 404;
    this.message = message || "Resource not found";
    this.name = "NotFound";
    this.stack = new Error().stack;
  }
};

const ApplicationError = class ApplicationError {
  /**
   * Class used to exceptions of models and dtos
   * @param {Number} status
   * @param {String} message
   */

  constructor(status, message) {
    this.status = status || 500;
    this.message = `Internal error at application ${message && "- " + message}`;
    this.name = "Application";
    this.stack = new Error().stack;
  }
};

module.exports = {
  InvalidModelErro,
  UnauthorizedError,
  NotFoundError,
  ApplicationError,
};
