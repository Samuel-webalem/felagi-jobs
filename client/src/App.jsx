import { Route, Routes,useNavigate } from "react-router-dom"
import Login from "./components/Auth/Login"
import { useState } from "react";
import Register from "./components/Auth/Register"
import EmployerRegister from "./components/Auth/EmployerRegister"
import EmployeeRegister from "./components/Auth/EmployeeRegister"
import AdminDashboard from "./page/AdminDashboard"
import AdminEmployee from "./page/AdminEmployee"
import AdminEmployer from "./page/AdminEmployer"
import AdminJobPost from "./page/AdminJobPost"
import logo from "./assets/logo.png";
import JobsList from "./components/Admin/Job/jobList.jsx";
import JobsDetail from "./components/Admin/Job/JobDetail.jsx";
import AboutUs from "./components/Admin/AboutUs/Aboutus.jsx";
import Footer from "./components/Admin/Footer/Footer.jsx";
import Discription from "./components/Hero/Discription.jsx";


function App() {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState(false);

    
  return (
    <div>
      <div className="py-4 px-[5%] flex flex-col gap-4">
        <div className="flex items-center ">
          <div className="flex items-center cursor-pointer gap-2" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" className="w-[50px]" />
            <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
              Felagi Jobs
            </h1>
          </div>
          <div className="flex-grow-[0.5]"></div>
          <ul className="flex items-center justify-between flex-grow">
            <div className="flexli flex items-center text-2xl justify-between flex-grow mr-10 ml-[200px]">
              <li
                className="nav-item cursor-pointer hover:text-[#328572] mr-10"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li
                className="nav-item cursor-pointer hover:text-[#328572] mr-20"
                onClick={() => navigate("/job/job-list")}
              >
                FindJob
              </li>
              <li
                className="nav-item cursor-pointer hover:text-[#328572] mr-20"
                onClick={() => navigate("/about")}
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
      </div>
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route
          path="/account/register/employer"
          element={<EmployerRegister />}
        />
        <Route
          path="/account/register/employee"
          element={<EmployeeRegister />}
        />
        <Route path="/control/dashboard-summary" element={<AdminDashboard />} />
        <Route path="/job/job-detail/:id" element={<JobsDetail />} />
        <Route path="/job/job-list" element={<JobsList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Discription />} />
        <Route path="/control/employees" element={<AdminEmployee />} />
        <Route path="/control/employers" element={<AdminEmployer />} />
        <Route path="/control/job-posts" element={<AdminJobPost />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
