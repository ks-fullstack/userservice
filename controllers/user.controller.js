const userService = require('../services/user.service');
const auditService = require('../audit/audit.service');
const responseHandler = require('../utils/response.handler');
const config = require('../config.json');

const serviceName = config[process.env.NODE_ENV].serviceName;

class UserController {
    getOne(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.getOne(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };

    getAll(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.getAll(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };

    getCount(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.getCount(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };

    create(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.create(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };

    update(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.update(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };

    delete(req, res, next) {
      try {
        auditService.create(req, serviceName);
        userService.delete(req).then(result => {
          responseHandler(res, result);
        }).catch(err => {
          next(err);
        });
      }
      catch(err) {
        next(err);
      }
    };
}

module.exports = new UserController();