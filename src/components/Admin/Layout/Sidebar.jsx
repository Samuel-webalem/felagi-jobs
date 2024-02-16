import React from 'react';
import logo from '../../../assets/Ellipse 23.png';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUserAlt, FaBuilding, FaClipboardList } from "react-icons/fa";
const Sidebar = () => {
    return (
        <div className="h-full w-full bg-[#328572] flex flex-col items-center justify-start py-5">
            <div className="flex items-center justify-center mb-8">
                <img src={logo} alt="logo" className="w-12" />
                <h1 className="text-2xl font-bold ml-2 text-white">EfuyeGela</h1>
            </div>
            <div className="flex flex-col space-y-2 gap-3 w-full">
                <Link to="/control/dashboard-summary" className="text-white hover:bg-gray-300 flex items-center p-2 gap-3"><MdDashboard className="text-white text-xl" />Dashboard</Link>
                <Link to="/control/employees" className="text-white hover:bg-gray-300 flex items-center p-2 gap-3"><FaUserAlt className='text-white text-xl' />Employees</Link>
                <Link to="/control/employers" className="text-white hover:bg-gray-300 flex items-center p-2 gap-3"><FaBuilding className='text-white text-xl' />Employers</Link>
                <Link to="/control/job-posts" className="text-white hover:bg-gray-300 flex items-center p-2 gap-3"><FaClipboardList className='text-white text-xl' />Job Posts</Link>
            </div>
        </div>
    );
};

export default Sidebar;
