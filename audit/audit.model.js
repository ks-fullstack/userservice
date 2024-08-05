const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    reqUrl: {
      type: String,
      required: true,
    },
    reqType: {
      type: String,
    },
    reqPayload: {
      type: Object
    },
    createdBy: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

const audit = mongoose.model("audit", auditSchema);

module.exports = audit;
