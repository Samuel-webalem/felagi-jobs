import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaPlus, FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="h-full w-full bg-[#EEEEEE] shadow-md flex flex-col w-60 items-center justify-start py-5">
      <div className="flex flex-col space-y-2 gap-3 w-full">
        <Link
          to="/control/dashboard-summary"
          className={`text-black flex items-center p-4 gap-5 ${
            location.pathname === "/control/dashboard-summary"
              ? "bg-gray-300"
              : ""
          }`}
          onClick={() => handleSetActiveLink("/control/dashboard-summary")}
        >
          <MdDashboard className="text-black text-xl" />
          Dashboard
        </Link>
        <Link
          to="/control/post-job"
          className={`text-black flex items-center p-4 gap-5 ${
            location.pathname === "/control/post-job" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleSetActiveLink("/control/post-job")}
        >
          <FaPlus className="text-black text-xl" />
          Post job
        </Link>
        <Link
          to="/control/job-posts"
          className={`text-black flex items-center p-4 gap-5 ${
            location.pathname === "/control/job-posts" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleSetActiveLink("/control/job-posts")}
        >
          <FaClipboardList className="text-black text-xl" />
          Job Posts
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
