const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const jobApplicationSchema = new Schema(
  {
    coverletter: {
      type: String,
      required: [true, "Please provide your coverletter"],
    },
    education: {
      degree: {
        type: String,
        required: [true, "Please provide your degree"],
      },
      school: {
        type: String,
        required: [true, "Please provide your school or university"],
      },
      graduationYear: {
        type: Number,
        required: [true, "Please provide your graduation year"],
      },
    },
    workExperience: [
      {
        title: {
          type: String,
          required: [true, "Please provide your job title"],
        },
        company: {
          type: String,
          required: [true, "Please provide your company name"],
        },
        startDate: {
          type: Date,
          required: [true, "Please provide the start date"],
        },
        endDate: Date,
        description: String,
      },
    ],
    applier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Change this to "Job"
      required: true,
    },
  },
  { timestamps: true }
);

jobApplicationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "applier",
    select: "name phone email",
  }).populate({
    path: "job",
  });
  next();
});

const JobApplication = model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
