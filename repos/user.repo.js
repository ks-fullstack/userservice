const userModel =  require('../models/user.model');

class UserRepo {
  getOne(recordId) {
    return userModel.findById(recordId);
  };

  getAll(filter) {
    let filterExp = filter ? JSON.parse(filter) : {};
    return userModel.find(filterExp);
  };

  getCount(filter) {
    let filterExp = filter ? JSON.parse(filter) : {};
    return userModel.find(filterExp).count();
  };

  create(inputData) {
    let saveData = new userModel(inputData);
    return new Promise((resolve, reject) => {
      saveData.save().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    }); 
  };

  update(filterExp, inputData) {
    return userModel.findOneAndUpdate(filterExp, inputData, {new: true});
  };

  delete(filterExp) {
    return userModel.deleteMany(filterExp);
  };
}

module.exports = new UserRepo();