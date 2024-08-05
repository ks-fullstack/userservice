const roleModel =  require('../models/role.model');

class RoleMasterRepo {
  getOne(recordId) {
    return roleModel.findById(recordId);
  };

  getAll(filter) {
    let filterExp = filter ? JSON.parse(filter) : {};
    return roleModel.find(filterExp);
  };

  getCount(filter) {
    let filterExp = filter ? JSON.parse(filter) : {};
    return roleModel.find(filterExp).count();
  };

  create(inputData) {
    let saveData = new roleModel(inputData);
    return new Promise((resolve, reject) => {
      saveData.save().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    }); 
  };

  update(filterExp, inputData) {
    return roleModel.findOneAndUpdate(filterExp, inputData, {new: true});
  };

  delete(filterExp) {
    return roleModel.deleteMany(filterExp);
  };
}

module.exports = new RoleMasterRepo();