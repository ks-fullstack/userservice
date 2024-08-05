const auditModel =  require('./audit.model');

class AuditRepo {
  create (inputData) {
    const addNewLog = new auditModel(inputData);
    return addNewLog.save(addNewLog);
  }
}

module.exports = new AuditRepo();