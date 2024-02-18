const express = require("express");
const companyController = require("../controller/companyController");

const router = express.Router();

router.route("/").get(companyController.getCompanys);
  router.route("/signup").post(companyController.signUp);
  router.route("/login").post(companyController.signIn);

router.route("/:id").get(companyController.getCompany);

module.exports = router;
