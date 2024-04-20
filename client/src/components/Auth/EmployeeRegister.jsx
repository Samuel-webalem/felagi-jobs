import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const EmployeeRegister = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordConfirmationChange = (e) =>
    setPasswordConfirmation(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          phonenumber: phoneNumber,
          password,
          passwordConfirmation,
        }),
      });

      if (!response.ok) {
        throw new Error(response.message);
      }

      const data = await response.json();
      navigate("/job/job-list");
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[450px] px-8 py-4 bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="text-2xl bg-gradient-to-r from-green-600 to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <input
            id="passwordConfirmation"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-500 text-sm text-center mt-4">
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
