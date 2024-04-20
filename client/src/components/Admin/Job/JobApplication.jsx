import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const JobApplication = () => {
  const location = useLocation();
  const { job } = location.state;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    coverletter: "",
    education: {
      degree: "",
      school: "",
      graduationYear: "",
    },
    workExperience: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    job: job.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: {
        ...prevFormData.education,
        [name]: value,
      },
    }));
  };

  const handleWorkExperienceChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      workExperience: prevFormData.workExperience.map((exp, i) =>
        i === index ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/jobs/apply",
        formData
      );
      if (response.data.status === "success") {
        navigate("/thank-you");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-[#D7E4C0] shadow-lg rounded-lg">
      <h1 className="text-2xl mb-8 text-center text-gray-800">
        Job Application
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="mb-6">
          <label htmlFor="coverletter" className="block mb-2 text-gray-700">
            Cover Letter
          </label>
          <textarea
            id="coverletter"
            name="coverletter"
            value={formData.coverletter}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <h2 className="text-2xl text-gray-800 mb-4">Education</h2>
          <div className="bg-gray-100 p-3 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="degree" className="block mb-2 text-gray-700">
                Degree
              </label>
              <input
                id="degree"
                name="degree"
                value={formData.education.degree}
                onChange={handleEducationChange}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="school" className="block mb-2 text-gray-700">
                School/University
              </label>
              <input
                id="school"
                name="school"
                value={formData.education.school}
                onChange={handleEducationChange}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="graduationYear"
                className="block mb-2 text-gray-700"
              >
                Graduation Year
              </label>
              <input
                id="graduationYear"
                name="graduationYear"
                type="number"
                value={formData.education.graduationYear}
                onChange={handleEducationChange}
                className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl  text-gray-800 mb-4">Work Experience</h2>
          {formData.workExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 mb-4 shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`title-${index}`}
                    className="block mb-2 text-gray-700"
                  >
                    Job Title
                  </label>
                  <input
                    id={`title-${index}`}
                    name="title"
                    value={exp.title}
                    onChange={(e) => handleWorkExperienceChange(e, index)}
                    className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`company-${index}`}
                    className="block mb-2 text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    id={`company-${index}`}
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleWorkExperienceChange(e, index)}
                    className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label
                    htmlFor={`startDate-${index}`}
                    className="block mb-2 text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    id={`startDate-${index}`}
                    name="startDate"
                    type="date"
                    value={exp.startDate}
                    onChange={(e) => handleWorkExperienceChange(e, index)}
                    className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor={`endDate-${index}`}
                    className="block mb-2 text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    id={`endDate-${index}`}
                    name="endDate"
                    type="date"
                    value={exp.endDate}
                    onChange={(e) => handleWorkExperienceChange(e, index)}
                    className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor={`description-${index}`}
                  className="block mb-2 text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                  className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  rows="3"
                ></textarea>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-[#328572] text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
