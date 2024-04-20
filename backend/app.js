const express = require("express");
const path = require("path");
const userrouter = require("./routes/userRoute");
const jobrouter = require("./routes/jobRoute");
const companyrouter = require("./routes/companyRoutes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept,Authorization"
  );
 res.setHeader("Access-Control-Allow-Methods", [
   "GET",
   "POST",
   "PATCH",
   "DELETE",
 ]);

  next();
});

app.use(express.json());
app.use("/api/users", userrouter);
app.use("/api/jobs", jobrouter);
app.use("/api/company", companyrouter);

app.all("*", (req, res, next) => {
  next(
    res.status(404).json({
      status: "failed",
      message: `can't find ${req.originalUrl} on this server`,
    })
  );
});

module.exports = app;
