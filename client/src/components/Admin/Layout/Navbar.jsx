
import { MdNotifications, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
      <div className="flex justify-end items-center bg-[#B6C4B6] p-4 rounded-2xl gap-8">
        <div className="flex items-center bg-[#F0ECE5] px-5 rounded-lg">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent border-none text-black mr-2 outline-none py-2 "
          />
          <MdSearch className="text-black text-xl" />
        </div>
        <div className="flex items-center gap-4">
          <MdNotifications className="text-black mr-4 cursor-pointer text-2xl" />
          <FaUserCircle className="text-black cursor-pointer text-3xl" />
        </div>
      </div>
    );
};

export default Navbar;
