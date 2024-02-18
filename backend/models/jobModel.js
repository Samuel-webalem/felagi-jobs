const mongoose = require("mongoose");

const { Schema } = mongoose;
const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please insert job title"],
    },
    description: {
      type: String,
      required: [true, "Please insert job description"],
    },
    requirement: {
      type: String,
      required: [true, "Please insert job requirement"],
    },
    responsibility: {
      type: String,
      required: [true, "Please insert job responsibility"],
    },
    location: {
      type: String,
      required: [true, "Please insert job location"],
    },
    salary: {
      type: Number,
      required: [true, "Please insert job salary"],
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    type: {
      type: String,
      enum: ["full-time", "part-time", "remote", "on-site"],
      default: "full-time",
    },
  },

  {
      toJSON: { virtuals: true },
      timestamps: true,
      toObject: { virtuals: true },
  }
);

jobSchema.pre(/^find/, function (next) {
  this.populate({
    path: "company",
    select: "name phonenumber email",
  });
  next();
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
