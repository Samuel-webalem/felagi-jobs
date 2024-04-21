import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const JobPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setJobData] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData.user._id;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://felagi-jobs.onrender.com/api/company/${userId}`
      );
      if (response.ok) {
        const { data } = await response.json();
        setJobData(data.company.postedJobs);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        jobData.map((job) => (
          <div key={job._id} className="grid m-10 bg-[#B6C4B6] p-10 rounded-lg">
            <h1 className="font-bold text-3xl mb-5">{job.title}</h1>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32 ">
                <h4 className="text-sm">Description:</h4>
              </div>
              <div className="flex-grow">
                <p className="font-light">{job.description}</p>
              </div>
            </div>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32">
                <h4 className="text-sm">Requirement:</h4>
              </div>
              <div className="flex-grow">
                <p className=" font-light">{job.requirement}</p>
              </div>
            </div>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32 ">
                <h4 className="text-sm">Responsibility:</h4>
              </div>
              <div className="flex-grow">
                <p className=" font-light">{job.responsibility}</p>
              </div>
            </div>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32 ">
                <h4 className="text-sm">Salary:</h4>
              </div>
              <div className="flex-grow">
                <p className=" font-light">{job.salary}</p>
              </div>
            </div>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32">
                <h4 className="text-sm">Type:</h4>
              </div>
              <div className="flex-grow">
                <p className=" font-light">{job.type}</p>
              </div>
            </div>
            <div className="flex font-bold gap-10 mb-3">
              <div className="w-32">
                <h4 className="text-sm">Location:</h4>
              </div>
              <div className="flex-grow">
                <p className="font-light">{job.location}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobPost;
