import React from 'react';
import { MdNotifications, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex justify-end items-center bg-[#29a285] p-4 rounded-2xl gap-8">
            <div className="flex items-center bg-[#328572] px-5 rounded-lg">
                <input type="text" placeholder="Search ..." className="bg-transparent border-none text-white mr-2 outline-none py-2 " />
                <MdSearch className="text-white text-xl" />
            </div>
            <div className="flex items-center gap-4">
                <MdNotifications className="text-white mr-4 cursor-pointer text-2xl" />
                <FaUserCircle className="text-white cursor-pointer text-3xl" />
            </div>
        </div>
    );
};

export default Navbar;
