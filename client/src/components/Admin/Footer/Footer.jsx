import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#328572] mt-5 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p>Email: info@felagijobs.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex mt-2">
            <a href="#" className="mr-4 hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <p>&copy; 2024 Felagi Jobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
