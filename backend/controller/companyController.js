const Company = require("../models/companyModel");



exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate(
      "postedJobs"
    );;
    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Company not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        company,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getCompanys = async (req, res) => {
  try {
    const companyData = await Company.find().populate("postedJobs");;
    res.status(201).json({
      msg: "success",
      data: { companyData },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json({
      msg: "success",
      data: { newCompany },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Company.findOne({ email: email }).select("+password");

  if (!user || (await user.correctPassword(password, user.password))) {
    return next(
      res.status(401).json({
        status: "failed",
        message: "incorrect email or password",
      })
    );
  }
  res.status(200).json({
    status: "success",
    user,
  });
};