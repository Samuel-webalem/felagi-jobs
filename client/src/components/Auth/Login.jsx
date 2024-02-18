import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setAuthUser, setIsLoggedIn,user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("employee");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({
      email: email,
      password: password,
      UserType: userType, // Include UserType in the authUser object
    });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <h2 className="mt-4 mb-8 text-3xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="mb-4">
            <select
              id="userType"
              name="userType"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="employee">Employee</option>
              <option value="company">Company</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#328572] text-white py-2 rounded-md mt-4 hover:bg-[#32857290]"
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4 text-center">
          Create account{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/account/register")}
          >
            sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
