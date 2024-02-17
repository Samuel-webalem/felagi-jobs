import { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using email and password
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
