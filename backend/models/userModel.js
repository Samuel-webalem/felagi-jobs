const { Schema, model } = require('mongoose');
const validator = require('validator')
const bcrypt = require("bcryptjs");

const userschema = Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide user name"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please provide email"],
      validate: [validator.isEmail, "please insert a valid email"],
    },
    phonenumber: {
      type: Number,
      required: [true, "Please provide phone number"],
    },
    password: {
      type: String,
      minlength: [
        8,
        "The product title have must equal or greater than 8 character",
      ],
      required: [true, "Please provide password"],
      select: false,
    },
    passwordConfirmation: {
      type: String,
      required: [true, "Please provide confirmation password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "password and cornfirmation password are not the same",
      },
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
userschema.virtual("jobapplied", {
  ref: "JobApplication",
  foreignField: "applier",
  localField: "_id",
});
userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirmation = undefined;
    next();
  } catch (err) {
    return next(err);
  }
});

userschema.methods.correctPassword = (newpassword, oldpassword) => {
  return bcrypt.compare(oldpassword, newpassword);
};
const User = model("User", userschema);

module.exports = User;