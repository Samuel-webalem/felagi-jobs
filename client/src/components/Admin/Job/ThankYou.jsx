import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-[#D7E4C0] shadow-lg rounded-lg mt-[100px] mb-[200px] text-center">
      <h1 className="text-2xl mb-8 text-gray-800">Thank You for Applying!</h1>
      <p className="text-lg mb-4">
        Your application has been submitted successfully. The employer will
        contact you soon.
      </p>
      <Link
        to="/"
        className="bg-[#328572] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
