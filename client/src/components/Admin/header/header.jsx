import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import defaultUserImage from "../../../assets/default.jpg";

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setShowLogoutMenu(false);
    navigate("/");
  };

  return (
    <div className="py-4 px-[5%] flex flex-col gap-4">
      <div className="flex items-center ">
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="w-[50px]" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <div className="flex-grow-[0.5]"></div>
        <ul className="flex items-center justify-between flex-grow">
          <div className="flexli flex items-center text-2xl justify-between flex-grow mr-10 ml-[200px]">
            {userData && userData.userType === "employee" && (
              <>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "Home"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-10`}
                  onClick={() => {
                    setActiveNavItem("Home");
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "FindJob"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-20`}
                  onClick={() => {
                    setActiveNavItem("FindJob");
                    navigate("/job/job-list");
                  }}
                >
                  FindJob
                </li>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "JobApplied"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-20`}
                  onClick={() => {
                    setActiveNavItem("JobApplied");
                    navigate("/job/job-applied");
                  }}
                >
                  JobApplied
                </li>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "AboutUs"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-20`}
                  onClick={() => {
                    setActiveNavItem("AboutUs");
                    navigate("/about");
                  }}
                >
                  AboutUs
                </li>
              </>
            )}
            {userData && userData.userType === "company" && (
              <>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "Home"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-10`}
                  onClick={() => {
                    setActiveNavItem("Home");
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "Dashboard"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-20`}
                  onClick={() => {
                    setActiveNavItem("Dashboard");
                    navigate("/control/dashboard-summary");
                  }}
                >
                  Dashboard
                </li>

                <li
                  className={`nav-item cursor-pointer ${
                    activeNavItem === "AboutUs"
                      ? "text-[#328572]"
                      : "text-gray-700"
                  } mr-20`}
                  onClick={() => {
                    setActiveNavItem("AboutUs");
                    navigate("/about");
                  }}
                >
                  AboutUs
                </li>
              </>
            )}
          </div>
          <div className="button container flex justify-end">
            {userData ? (
              <>
                <div className="relative">
                  <img
                    src={userData.image || defaultUserImage}
                    alt="user"
                    className="w-10 h-10 rounded-full mr-3 cursor-pointer"
                    onClick={() => setShowLogoutMenu(!showLogoutMenu)}
                  />
                  {showLogoutMenu && (
                    <ul className="absolute top-full right-0  rounded py-1">
                      <li>
                        <button
                          className="block w-full bg-[#328572] px-5 py-2 rounded text-[#ffffff] "
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <button
                  className="bg-[#328572] mr-5 px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md"
                  onClick={() => navigate("/account/login")}
                >
                  Login
                </button>
                <button
                  className="bg-[#328572] px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md"
                  onClick={() => navigate("/account/register")}
                >
                  SignUp
                </button>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
