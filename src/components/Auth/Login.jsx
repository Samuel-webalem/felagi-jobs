import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Flag from 'react-country-flag';
import logo from '../../assets/Ellipse 23.png';
import { useNavigate } from 'react-router-dom';

const PhoneValidationComponent = () => {
    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const handlePhoneChange = (value, country) => {
        setPhoneNumber(value);
        setCountryCode(country);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-8 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-center gap-2">
                    <img src={logo} alt="logo" className="w-12" />
                    <h1 className="text-2xl font-bold">EfuyeGela</h1>
                </div>
                <h2 className="mt-4 mb-8 text-3xl font-bold text-center">Login</h2>
                <div className="border border-gray-300 rounded-md p-4 mb-4">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        defaultCountry="US"
                    />
                    {countryCode && (
                        <Flag countryCode={countryCode.toUpperCase()} style={{ marginLeft: '5px' }} />
                    )}
                </div>
                <input
                    type="number"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 mb-4"
                    placeholder="Enter the confirmation code"
                    disabled={!phoneNumber}
                />
                <p className="text-gray-500 text-sm">This field will be enabled once a phone number is entered.</p>
                <button
                    className="w-full bg-[#328572] text-white py-2 rounded-md mt-4 hover:bg-[#32857290]"
                    disabled={!phoneNumber}
                >
                    Login
                </button>
                <p className="text-gray-500 text-sm mt-4 text-center">
                    Create account <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/account/register')}>sign up</span>
                </p>
            </div>
        </div>
    );
};

export default PhoneValidationComponent;
