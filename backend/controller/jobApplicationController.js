const JobApplication = require("../models/jobApplication");

exports.createJobApplication = async (req, res) => {
  try {
    const jobApplication = await JobApplication.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        jobApplication,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAppelyedjobs = async (req, res) => {
  try {
    const appliedData = await JobApplication.find();
    res.status(201).json({
      msg: "success",
      data: { appliedData },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
