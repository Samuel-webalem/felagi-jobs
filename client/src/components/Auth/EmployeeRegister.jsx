import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const EmployeeRegister = () => {
  const navigate = useNavigate();

  // State variables for form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler functions to update state
  const handleFirstNameChange = (e) => {
    setFullName(e.target.value);
  };

 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[450px] px-8 py-4 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <h2 className=" text-3xl font-bold text-center">
          Employee Registration
        </h2>
        <form className="grid grid-cols-1 gap-3 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={fullName}
              onChange={handleFirstNameChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-2 rounded-md">
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/account/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeRegister;
