import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#328572] mt-5 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold flex items-center">
            <i className="fas fa-phone-alt mr-2"></i> Contact Us
          </h3>
          <p>
            <i className="fas fa-envelope mr-2"></i> Email: info@felagijobs.com
          </p>
          <p>
            <i className="fas fa-phone mr-2"></i> Phone: +1-123-456-7890
          </p>
          <p>
            <i className="fas fa-map-marker-alt mr-2"></i> 123 Main Street,
            City, State
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="mt-2">
            <a href="#" className="block hover:text-gray-300">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
            <a href="#" className="block hover:text-gray-300">
              <i className="fab fa-facebook mr-2"></i> Facebook
            </a>
            <a href="#" className="block hover:text-gray-300">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <div className="mt-2">
            <a href="#" className="block hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="block hover:text-gray-300">
              Services
            </a>
            <a href="#" className="block hover:text-gray-300">
              Privacy Policy
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
