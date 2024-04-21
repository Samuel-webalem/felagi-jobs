import React, { useState } from "react";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const EmployerRegister = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = {
      name: fullName,
      email,
      description,
      phone,
      address,
      password,
      passwordConfirmation,
    };

    try {
      const response = await axios.post(
        "https://felagi-jobs.onrender.com/api/company/signup",
        requestBody
      );
      let data = response.data;

      localStorage.setItem(
        "companyData",
        JSON.stringify({
          company: {
            ...data.data.company,
          },
          userType: "company",
          token: data.token,
        })
      );
      navigate("/control/dashboard-summary");
    } catch (error) {
      console.log("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen mt-4 bg-gray-100">
      <div className="w-[450px] px-8 py-4 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center justify-center mb-2">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-sm font-semibold">
                  Company Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => handleInputChange(e, setFullName)}
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="description" className="text-sm font-semibold">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => handleInputChange(e, setDescription)}
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => handleInputChange(e, setPhone)}
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-sm font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => handleInputChange(e, setAddress)}
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-sm font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => handleInputChange(e, setPassword)}
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="passwordConfirmation"
                    className="text-sm font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) =>
                      handleInputChange(e, setPasswordConfirmation)
                    }
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-2 rounded-md">
                Sign Up
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4 text-center">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/account/login")}
              >
                Sign in
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployerRegister;
