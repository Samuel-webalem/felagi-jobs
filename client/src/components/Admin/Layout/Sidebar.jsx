
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt, FaBuilding, FaClipboardList } from "react-icons/fa";
const Sidebar = () => {
    return (
      <div className="h-full w-full bg-[#B6C4B6] flex flex-col items-center justify-start py-5">
        <div className="flex items-center justify-center mb-8">
          <img src={logo} alt="logo" className="w-12" />
          <h1 className="text-2xl font-bold ml-2 text-white"></h1>
        </div>
        <div className="flex flex-col space-y-2 gap-3 w-full">
          <Link
            to="/control/dashboard-summary"
            className="text-black hover:bg-gray-300 flex items-center p-4 gap-5"
          >
            <MdDashboard className="text-black text-xl" />
            Dashboard
          </Link>
          <Link
            to="/control/employees"
            className="text-black hover:bg-gray-300 flex items-center p-4 gap-5"
          >
            <FaUserAlt className="text-black text-xl" />
            Employees
          </Link>
          <Link
            to="/control/employers"
            className="text-black hover:bg-gray-300 flex items-center p-4 gap-5"
          >
            <FaBuilding className="text-black text-xl" />
            Employers
          </Link>
          <Link
            to="/control/job-posts"
            className="text-black hover:bg-gray-300 flex items-center p-4 gap-5"
          >
            <FaClipboardList className="text-black text-xl" />
            Job Posts
          </Link>
        </div>
      </div>
    );
};

export default Sidebar;
