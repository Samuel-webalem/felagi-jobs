import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const JobApplied = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData.user._id;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://felagi-jobs.onrender.com/api/users/${userId}`
      );
      if (response.ok) {
        const { data } = await response.json();
        const extractedJobs = data.user.jobapplied.map((job) => job.job);
        setJobData(extractedJobs);
        console.log(data.user.jobapplied);
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
        setLoading(false);
      }
    } catch (error) {
      console.error("An error occurred", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-[500px]">
      <div className="container ml-10 flex justify-center ">
        {loading ? (
          <Loading />
        ) : (
          <table className="min-w-[70%] divide-y divide-gray-200 p-10 mt-5">
            <thead className="bg-[#D7E4C0]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobData.map((job) => (
                <tr key={job._id} className="hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap ">{job.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {job.company.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{job.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobApplied;
