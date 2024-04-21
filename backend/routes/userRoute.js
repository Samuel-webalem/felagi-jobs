const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter.route("/signup").post(userController.signUp);
userRouter.route("/login").post(userController.signIn);
userRouter.route("/").get(userController.getUsers);
userRouter.route("/:id").get(userController.getUserById);


module.exports = userRouter;
