const express = require("express");
const jobController = require("../controller/jobController");
const jobApplicationController = require("../controller/jobApplicationController");

const jobRoute = express.Router();

jobRoute
  .route("/apply")
  .get(jobApplicationController.getAppelyedjobs)
  .post(jobApplicationController.createJobApplication);

  
jobRoute.route("/:id").get(jobController.getJobById);
jobRoute.route("/").get(jobController.getJobs).post(jobController.createjob);

module.exports = jobRoute;
module.exports = jobRoute;
