import  { useState } from "react";
import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
const AddJobModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirement: "",
    responsibility: "",
    salary: "",
    type: "",
    location: "",
  });
    const customModalStyles = {
      content: {
            width: "40%",
        margin: "auto",
        background: "#B6C4B6",
        overflow: "scroll",
      },
    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      requirement: "",
      responsibility: "",
      salary: "",
      type: "",
      location: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Job Modal"
      style={customModalStyles}
    >
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl font-semibold mb-6">Add New Job</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-3">
          <label className="flex flex-col">
            <span className="text-sm">Title:</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Description:</span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-0.5 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Requirement:</span>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Responsibility:</span>
            <textarea
              name="responsibility"
              value={formData.responsibility}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Salary:</span>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Type:</span>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Type</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-sm">Location:</span>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            className="bg-[#328572] hover:bg-[#32857290] text-white font-bold py-2 rounded-md"
          >
            Add Job
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddJobModal;
