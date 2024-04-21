const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const signtoken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signtoken(user._id);
  const expiresInMs = process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000;
  const cookieOption = {
    expires: new Date(Date.now() + expiresInMs),
  };

  if (process.env.NODE_ENV === "production") cookieOption.secure = true;
  res.cookie("jwt", token, cookieOption);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};


exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    createSendToken(newUser, 201, res);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

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

  createSendToken(user, 200, res);
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
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("jobapplied");
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
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