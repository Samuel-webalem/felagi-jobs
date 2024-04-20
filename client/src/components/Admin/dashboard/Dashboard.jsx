import React from "react";

const Dashboard = () => {
  const companyData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded px-8 py-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Company Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 font-semibold">Name:</p>
            <p>{companyData.user.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Email:</p>
            <p>{companyData.user.email}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Phone:</p>
            <p>{companyData.user.phone}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Industry:</p>
            <p>{companyData.user.industry}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Address:</p>
            <p>{companyData.user.address}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Created At:</p>
            <p>{new Date(companyData.user.createdAt).toLocaleDateString()}</p>
          </div>
          <div colSpan={2}>
            <p className="text-gray-600 font-semibold">Description:</p>
            <p>{companyData.user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
