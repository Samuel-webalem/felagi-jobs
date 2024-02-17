import "./hero.css";
import { useState } from "react";
import logo from "../../assets/logo.png";
import right from "../../assets/right image.png";
import { useNavigate } from "react-router-dom";
import JobsList from "../../components/Admin/Job/jobList.jsx";
import Discription from "./Discription.jsx";

const Hero = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility(true);
  };

  return (
    <div className="py-4 px-[5%] flex flex-col gap-4">
      <div className="flex items-center ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[50px]" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <div className="flex-grow-[0.5]"></div>
        <ul className="flex items-center justify-between flex-grow">
          <div className="flexli flex items-center text-2xl justify-between flex-grow mr-10">
            <li
              className="nav-item mr-10"
              onClick={()=>setVisibility(false)}
            >
              Home
            </li>
            <li className="nav-item mr-10" onClick={handleVisibility}>
              FindJob
            </li>
            <li
              className="nav-item mr-20"
              onClick={() => navigate("/account/login")}
            >
              AboutUs
            </li>
          </div>
          <div className="button container flex justify-end">
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
          </div>
        </ul>
      </div>
      {visibility ? <JobsList /> : <Discription />}
    </div>
  );
};

export default Hero;
