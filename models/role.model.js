const mongoose = require("mongoose");

const roleMasterSchema = new mongoose.Schema(
  {
    roleId: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    role: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    createdBy: {
      type: Object
    },
    updatedBy: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

const roleMaster = mongoose.model("RoleMaster", roleMasterSchema);

module.exports = roleMaster;
