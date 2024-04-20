const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const companySchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: [true, "Please provide user name"],
    },
    email: {
      type: String,
      // unique: true,
      lowercase: true,
      required: [true, "Please provide email"],
      validate: [validator.isEmail, "please insert a valid email"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description of the company"],
    },
    industry: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Please provide the company phone number"],
    },
    address: {
      type: String,
      required: [true, "Please provide the company address"],
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
companySchema.virtual("postedJobs", {
  ref: "Job",
  foreignField: "company",
  localField: "_id",
});



companySchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirmation = undefined;
    next();
  } catch (err) {
    return next(err);
  }
});

companySchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const Company = model("Company", companySchema);

module.exports = Company;
