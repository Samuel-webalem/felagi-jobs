import React from 'react';
import logo from '../../assets/Ellipse 23.png';
import { useNavigate } from 'react-router-dom';

const EmployeeRegister = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-[450px] px-8 py-4 bg-white rounded-lg shadow-md flex flex-col">
                <div className="flex items-center justify-center mb-4">
                    <img src={logo} alt="logo" className="w-16" />
                    <h1 className="text-2xl font-bold ml-2">EfuyeGela</h1>
                </div>
                <h2 className=" text-3xl font-bold text-center">Employee Registration</h2>
                <form className="grid grid-cols-1 gap-3 mt-8">
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="age">Age</label>
                        <input id="age" type="number" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="gender">Gender</label>
                        <select id="gender" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" >
                            <option value="" disabled selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="headshot">Headshot Photo</label>
                        <input id="headshot" type="file" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold" htmlFor="kebeleId">Kebele ID</label>
                        <input id="kebeleId" type="file" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <button className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-2 rounded-md">
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-500 text-sm text-center">
                    Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/account/login')}>Sign in</span>
                </p>
            </div>
        </div>
    );
};

export default EmployeeRegister;
