import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="w-[450px] p-8 bg-white rounded-lg h-[400px] mt-20 shadow-md flex flex-col">
        <div className="flex items-center justify-center mb-5">
          <img src={logo} alt="logo" className="w-16" />
          <h1 className="bg-gradient-to-r from-green-600 text-2xl to-gray-700 text-transparent bg-clip-text">
            Felagi Jobs
          </h1>
        </div>
        <div className="flex justify-center mb-6 flex-col gap-5">
          <button
            className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-3 px-6 rounded-lg h-[15vh]"
            onClick={() => navigate("/account/register/employer")}
          >
            Sign Up as Company
          </button>
          <button
            className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-3 px-6 rounded-lg h-[15vh]"
            onClick={() => navigate("/account/register/employee")}
          >
            Sign Up as Employee
          </button>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/account/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
