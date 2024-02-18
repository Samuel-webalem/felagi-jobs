const Job = require('../models/jobModel')

exports.createjob = async(req, res)=>{
    try {
      const newjob =  await Job.create(req.body)
        res.status(201).json({
            msg: 'Job created',
            data: { newjob }
        });
    } catch (error) {
           res.status(400).json({
      status: 'fail',
      message: error.message
    });
    }
}

exports.getJobs = async (req, res) => {
    try {
        const jobsdata = await Job.find();
       res.status(201).json({
            msg: 'success',
            data: { jobsdata }
        });
    } catch (error) {
           res.status(400).json({
      status: 'fail',
      message: error.message
    }); 
    }
}



exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        status: "fail",
        message: "Job not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: { job },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};