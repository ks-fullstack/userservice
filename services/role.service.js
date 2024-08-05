const roleRepo = require('../repos/role.repo');
const CustomError = require('../utils/custom.error');
const appConstant = require('../constants/app.constant');

class RoleService {
  async getOne(req) {
    let recordId = req.params.id;
    let resObj = await roleRepo.getOne(recordId);
    let result = {
      data: resObj,
      message: 1 + appConstant.getResponseMessage,
      count: 1
    };
    return result;
  };

  async getAll(req) {
    let filterExp = req.params.filter || '';
    let resObj = await roleRepo.getAll(filterExp);
    let result = {
      data: resObj,
      message: resObj.length + appConstant.getResponseMessage,
      count: resObj.length
    };
    return result;
  };

  async getCount(req) {
    let filterExp = req.params.filter || '';
    let resObj = await roleRepo.getCount(filterExp);
    let result = {
      data: resObj,
      message: resObj + appConstant.getResponseMessage,
      count: resObj
    };
    return result;
  };

  async create(req) {
    let data = req.body;
    if(Array.isArray(data)) {
      if(data.length === 0) {
        throw new CustomError('Empty payload', 422);
      }
    }
    else {
      if(!data || (data && Object.keys(data).length === 0)) {
        throw new CustomError('Empty payload', 422);
      }
    }

    let resObj = await roleRepo.create(req.body);
    let result = {
      data: resObj,
      message: appConstant.createResponseMessage,
      count: Array.isArray(resObj) ? resObj.length : 1
    };
    return result;
  };

  async update(req) {
    let filterExp = req.body.filterExp || '';
    let requestedDataToUpdate = req.body.data || '';
    if(!filterExp || (filterExp && Object.keys(filterExp).length === 0)) {
      throw new CustomError('Filter expression required', 422);
    }
    else if(!requestedDataToUpdate || (requestedDataToUpdate && Object.keys(requestedDataToUpdate).length === 0)) {
      throw new CustomError('Payload required to update data', 422);
    }
    else {
      let resObj = await roleRepo.update(filterExp, requestedDataToUpdate);
      let updatedRecordCount = 0;
      if (resObj) {
        updatedRecordCount = Array.isArray(resObj) ? resObj.length : 1;
      }
      let result = {
        data: resObj,
        message: updatedRecordCount + appConstant.updateResponeMessage,
        count: updatedRecordCount
      };
      return result;
    }
  };
  
  async delete(req) {
    let filterExp = req.body.filterExp || '';
    if(!filterExp || (filterExp && Object.keys(filterExp).length === 0)) {
      throw new CustomError('Filter expression required', 422);
    }
    else {
      let resObj = await roleRepo.delete(filterExp);
      let result = {
        message: resObj.deletedCount + appConstant.deleteResponeMessage,
        count: resObj.deletedCount
      };
      return result;
    }
  };
}

module.exports = new RoleService();