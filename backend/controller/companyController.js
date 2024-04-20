const Company = require("../models/companyModel");

const jwt = require("jsonwebtoken");

const signtoken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (company, statusCode, res) => {
  const token = signtoken(company._id);
  const expiresInMs =
    parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000;
  const cookieOption = {
    expires: new Date(Date.now() + expiresInMs),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("jwt", token, cookieOption);
  company.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      company,
    },
  });
};

exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate(
      "postedJobs"
    );
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
    const companyData = await Company.find().populate("postedJobs");
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
    createSendToken(newCompany, 201, res);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};


exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const company = await Company.findOne({ email })
    .select("+password")
    .populate("postedJobs");

  if (
    !company ||
    !(await company.correctPassword(password, company.password))
  ) {
    return next(
      res.status(401).json({
        status: "failed",
        message: "incorrect email or password",
      })
    );
  }
  createSendToken(company, 200, res);
};

