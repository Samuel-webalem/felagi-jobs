import React from "react";
import { useJob } from "../../../contexts/jobContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaBriefcase } from "react-icons/fa";

const JobDetail = () => {
  const { jobs, loading, error } = useJob();
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-[70%] pl-10 pr-10 border bg-[#D7E4C0] border-gray-300 m-5 ml-[15%] rounded-md mb-8 items-center justify-center">
      <div className="flex mb-5 mt-5 items-center justify-center">
        <div className="block">
          <FaBriefcase
            className="inline-block text-4xl m-2 ml-[60px]"
            color="#328572"
          />
          <div className="">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <h3 className="text-lg ml-2 font-bold">{job.company.name}</h3>
          </div>
          <p className="text-sm mt-2 ml-2">
            <FaMapMarkerAlt className="inline-block mr-2" color="#328572" />{" "}
            {job.location}
          </p>
        </div>
      </div>
      <div className="ml-[100px] item-center mr-[100px]">
        <div className="flex justify-between w-[70%] ml-[100px]">
          <p className="text-sm mt-2">
            <span className="font-bold">Salary :</span> {job.salary} ETB
          </p>
          <p className="text-sm text-[#328572] mt-2 ">
            <FaClock className="inline-block mr-2" color="#328572" /> {job.type}
          </p>
        </div>
        <p className="font-bold text-xl mt-[15px]">Description :</p>
        <p className="text-lg mt-2">{job.description}</p>
        <hr className="border-0 bg-[#BBC3A4] h-px mt-2" />
        <p className="font-bold text-xl mt-[20px]">Requirement :</p>
        <p className="text-lg mt-2">{job.requirement}</p>
        <hr className="border-0 bg-[#BBC3A4] h-px mt-2" />
        <p className="font-bold text-xl mt-[20px]">Responsibility :</p>
        <p className="text-lg mt-2">{job.responsibility}</p>
        <div className="flex justify-between items-center"></div>
      </div>
      <button
        className="w-[70%] bg-[#328572] text-white py-2 rounded-md mt-8 mb-10 ml-[120px] hover:bg-[#32857290]"
        onClick={() => {
          navigate(`/job/apply/${job.id}`, { state: { job } });
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default JobDetail;
