const roleService = require('../services/role.service');
const auditService = require('../audit/audit.service');
const responseHandler = require('../utils/response.handler');
const config = require('../config.json');

const serviceName = config[process.env.NODE_ENV].serviceName;

class RoleController {
    getOne(req, res, next) {
      try {
        auditService.create(req, serviceName);
        roleService.getOne(req).then(result => {
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
        roleService.getAll(req).then(result => {
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
        roleService.getCount(req).then(result => {
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
        roleService.create(req).then(result => {
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
        roleService.update(req).then(result => {
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
        roleService.delete(req).then(result => {
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

module.exports = new RoleController();