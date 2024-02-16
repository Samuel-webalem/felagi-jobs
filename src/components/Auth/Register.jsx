import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Ellipse 23.png';

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-[450px] p-8 bg-white rounded-lg shadow-md flex flex-col">
                <div className="flex items-center justify-center mb-8">
                    <img src={logo} alt="logo" className="w-16" />
                    <h1 className="text-2xl font-bold ml-2">EfuyeGela</h1>
                </div>
                <h2 className="mt-4 mb-8 text-3xl font-bold text-center">Create Account</h2>
                <div className="flex justify-center mb-6 flex-col gap-5">
                    <button className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-3 px-6 rounded-lg h-[15vh]" onClick={() => navigate('/account/register/employer')}>
                        Sign Up as Employer
                    </button>
                    <button className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-3 px-6 rounded-lg h-[15vh]" onClick={() => navigate('/account/register/employee')}>
                        Sign Up as Employee
                    </button>
                </div>
                <p className="text-gray-500 text-sm text-center">
                    Already have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/account/login')}>Sign in</span>
                </p>
            </div>
        </div>
    );
};

export default Register;
