const auditRepo = require('./audit.repo');

class AuditService {
  create(req, serviceName) {
    let inputData = {
      serviceName : serviceName,
      reqUrl : req.originalUrl,
      reqType : req.method,
      reqPayload : req.body 
    };
    try {
      auditRepo.create(inputData);
    } 
    catch(err) {
      throw new Error(err);
    }
  };
}

module.exports = new AuditService();