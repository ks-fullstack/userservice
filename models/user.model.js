const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    salutation: {
      type: String,
      trim: true
    },
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    middlename: {
      type: String,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    userid: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    gender: {
      type: String,
      enum : ['male','female'],
      required: true,
    },
    dob: {
      type: Date,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    countryCode: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
      unique: true
    },
    isMobileVerified: {
      type: Boolean,
      default: false
    },
    isEmailVerified: {
      type: Boolean,
      default: false
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

userSchema.index(
  { firstname: 1, lastname: 1, email: 1, mobile: 1 },
  { unique: true }
);



userSchema.virtual('fullname').get(function () {
  let nameArr = [this.salutation, this.firstname, this.middlename, this.lastname];
  return nameArr.join(' ');
});

const user = mongoose.model("User", userSchema);

module.exports = user;
