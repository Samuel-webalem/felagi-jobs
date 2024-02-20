import React, { useState,useEffect } from "react";

import { useLocation } from "react-router-dom";
import {
  useNavigate
} from "react-router-dom";
import { useJob } from "../../../contexts/jobContext.jsx";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaRegClock,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate(); // Use navigate from react-router-dom
  const { jobs, loading, error } = useJob();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const location = useLocation();
  const propValue = location.state?.propKey;
 useEffect(() => {
   if (propValue) {
     setSearchTerm(propValue);
   }
 }, [propValue]);
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="grid">
      <div className="flex justify-between ml-10 mr-10">
        <div>
          <div className="flex m-1 gap-2 w-full  justify-end">
            <div className="flex gap-2 w-[500px] bg-[#D7E4C0] mr-7 ml-[740px] p-2 justify-between rounded leading-normal">
              <input
                type="text"
                placeholder="Search by Jobs title......"
                className="bg-transparent text-black w-[300px] placeholder:text-black border-none outline-none px-2 py-0.1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-[#328572] px-1 py-1 w-[100px] rounded text-[#ffffff] cursor-pointer shadow-md"
                onClick={() => {}}
              >
                Find job
              </button>
            </div>
          </div>
          {currentJobs.map((job) => {
            const createdAt = new Date(job.createdAt);
            const now = new Date();
            const diff = now - createdAt;
            let posted;
           if (diff < 60000) {
             posted = `${Math.round(diff / 1000)} seconds ago`;
           } else if (diff < 3600000) {
             posted = `${Math.round(diff / 60000)} minutes ago`;
           } else if (diff < 86400000) {
             posted = `${Math.round(diff / 3600000)} hours ago`;
           } else if (diff < 604800000) {
             posted = `${Math.round(diff / 86400000)} days ago`;
           } else if (diff < 2419200000) {
             posted = `${Math.round(diff / 604800000)} weeks ago`;
           } else {
             posted = `${Math.round(diff / 2419200000)} months ago`;
           }


            return (
              <div
                key={job.id}
                className="w-[85%] p-10 border bg-[#D7E4C0] border-gray-300 m-5 ml-[100px] rounded-md mb-2"
              >
                <div className="flex justify-between mb-5">
                  <div className="flex">
                    <FaBriefcase
                      className="inline-block text-4xl m-2"
                      color="#328572"
                    />
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="text-sm font-bold">
                        {job.company?.name || "Company Name Unavailable"}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg mt-2">
                    <FaMapMarkerAlt
                      className="inline-block mr-2"
                      color="#328572"
                    />
                    {job.location}
                  </p>
                </div>

                <p className="text-lg mt-2">{job.description}</p>

                <hr className="border-0 bg-[#BBC3A4] h-px mt-8" />

                <div className="flex justify-between items-center">
                  <p className="text-lg text-[#328572] mt-4 ">
                    <FaClock className="inline-block mr-2" color="#328572" />
                    {job.type}
                  </p>
                  <div className="flex date mt-5">
                    <FaRegClock className="inline-block mr-2 mt-1 text-xl text-[#328572]" />
                    <p className="text-[#328572]">{posted}</p>
                  </div>
                  <div
                    className="detail cursor-pointer"
                   onClick={() => navigate(`/job/job-detail/${job.id}`, { state: { job } })}
                  >
                    <p className="text-bold text-[#328572] mt-5 text-lg">
                      View Job Detail
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center mt-5">
            {Array.from(
              { length: Math.ceil(filteredJobs.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-[#328572] text-white"
                      : "bg-white text-[#328572] hover:bg-gray-200 hover:text-black"
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
