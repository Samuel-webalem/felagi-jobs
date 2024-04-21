import React, { useState } from "react";

import Loading from "../../Loading/Loading";

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirement: "",
    responsibility: "",
    location: "",
    salary: "",
    type: "full-time",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError("");
    setFormSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.ok) {
        setFormSuccess("Job posted successfully!");
        setFormData({
          title: "",
          description: "",
          requirement: "",
          responsibility: "",
          location: "",
          salary: "",
          type: "full-time", // Reset to default value after successful submission
        });
      } else {
        const errorData = await response.json();
        setFormError(
          errorData.error || "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      setFormError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="container mx-auto max-w-3xl mt-10">
      {formSuccess && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
          {formSuccess}
        </div>
      )}
      {formError && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4">
          {formError}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block font-semibold text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="requirement"
            className="block font-semibold text-gray-700"
          >
            Requirements
          </label>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="form-textarea w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="responsibility"
            className="block font-semibold text-gray-700"
          >
            Responsibilities
          </label>
          <textarea
            id="responsibility"
            name="responsibility"
            value={formData.responsibility}
            onChange={handleChange}
            className="form-textarea w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <label
              htmlFor="location"
              className="block font-semibold text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="salary"
              className="block font-semibold text-gray-700"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="form-input w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="type" className="block font-semibold text-gray-700">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-site</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white font-semibold rounded-md mb-[50px] shadow-sm bg-[#328572] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
              isLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post Job"}
          </button>
        </div>
      </form>
    </div>
  );

};

export default PostJobForm;
