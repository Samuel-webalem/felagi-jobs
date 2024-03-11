import React, { useState } from "react";
import axios from "axios";

const JobApplication = () => {
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
    applierId: "",
    jobId: "",
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
      const response = await axios.post("/api/job-applications", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 shadow-lg rounded">
      <h1 className="text-3xl font-bold mb-8">Job Application</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-6">
          <label htmlFor="coverletter" className="block mb-2 font-bold">
            Cover Letter
          </label>
          <textarea
            id="coverletter"
            name="coverletter"
            value={formData.coverletter}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <div>
            <label htmlFor="degree" className="block mb-2 font-bold">
              Degree
            </label>
            <input
              id="degree"
              name="degree"
              value={formData.education.degree}
              onChange={handleEducationChange}
              className="w-full border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="school" className="block mb-2 font-bold">
              School/University
            </label>
            <input
              id="school"
              name="school"
              value={formData.education.school}
              onChange={handleEducationChange}
              className="w-full border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="graduationYear" className="block mb-2 font-bold">
              Graduation Year
            </label>
            <input
              id="graduationYear"
              name="graduationYear"
              type="number"
              value={formData.education.graduationYear}
              onChange={handleEducationChange}
              className="w-full border-gray-300 rounded p-2"
              required
            />
          </div>
        </div>
        {formData.workExperience.map((exp, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-bold">Experience {index + 1}</h3>
            <div>
              <label
                htmlFor={`title-${index}`}
                className="block mb-2 font-bold"
              >
                Job Title
              </label>
              <input
                id={`title-${index}`}
                name="title"
                value={exp.title}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                className="w-full border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`company-${index}`}
                className="block mb-2 font-bold"
              >
                Company
              </label>
              <input
                id={`company-${index}`}
                name="company"
                value={exp.company}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                className="w-full border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`startDate-${index}`}
                className="block mb-2 font-bold"
              >
                Start Date
              </label>
              <input
                id={`startDate-${index}`}
                name="startDate"
                type="date"
                value={exp.startDate}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                className="w-full border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`endDate-${index}`}
                className="block mb-2 font-bold"
              >
                End Date
              </label>
              <input
                id={`endDate-${index}`}
                name="endDate"
                type="date"
                value={exp.endDate}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                className="w-full border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label
                htmlFor={`description-${index}`}
                className="block mb-2 font-bold"
              >
                Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleWorkExperienceChange(e, index)}
                className="w-full border-gray-300 rounded p-2"
                rows="3"
              ></textarea>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
