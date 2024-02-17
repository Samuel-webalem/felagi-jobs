import AddJobModal from "./AddJobForm";
import {useState} from 'react'

const JobPost = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddJob = (formData) => {
    // Handle adding the job here
    console.log(formData);
  };
  return (
    <div className="container">
      <button
        className="bg-[#328572] text-white ml-10 w-64 px-4 py-2 rounded"
        onClick={handleOpenModal}
      >
        Add New
      </button>
      <AddJobModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddJob}
      />
      <div className="grid m-10 bg-[#B6C4B6] p-10 rounded-lg">
        <h1 className="font-bold text-3xl mb-5">Senior Accountant</h1>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32 ">
            <h4 className="text-sm">Description:</h4>
          </div>
          <div className="flex-grow">
            <p className="font-light">
              we are looking for a senior accountant candidate with experience
              in cafe, restaurant and import and export company
            </p>
          </div>
        </div>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32">
            <h4 className="text-sm">Requirement:</h4>
          </div>
          <div className="flex-grow">
            <p className=" font-light">with 2 or above years experience</p>
          </div>
        </div>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32 ">
            <h4 className="text-sm">Responsibility:</h4>
          </div>
          <div className="flex-grow">
            <p className=" font-light">managing our company</p>
          </div>
        </div>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32 ">
            <h4 className="text-sm">Salary:</h4>
          </div>
          <div className="flex-grow">
            <p className=" font-light">1000 ETB</p>
          </div>
        </div>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32">
            <h4 className="text-sm">Type:</h4>
          </div>
          <div className="flex-grow">
            <p className=" font-light">Full time</p>
          </div>
        </div>
        <div className="flex font-bold gap-10 mb-3">
          <div className="w-32">
            <h4 className="text-sm">Location:</h4>
          </div>
          <div className="flex-grow">
            <p className="font-light">Addis Ababa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
