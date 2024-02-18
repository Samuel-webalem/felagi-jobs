const User = require("../models/userModel");

exports.signUp = async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        msg: "success",
        data: { newUser },
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
}
exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email })
    .select("+password")
    .populate("jobapplied");

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

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role) || !roles) {
      next(
        res.status(400).json({
          status: "failed",
          message: "you dont have a permition to perform this task",
        })
      );
    }
    next();
  };
};

exports.getUsers = async (req, res) => {
  try {
    const companyData = await User.find().populate("jobapplied");
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