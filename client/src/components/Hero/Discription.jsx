import { useState } from "react";
import right from "../../assets/right image.png";
import { useNavigate } from "react-router-dom";

function Discription() {
  const [propValue, setPropValue] = useState(""); 
  const navigate = useNavigate();

  const handleClick = () => {
    const state = { propKey: propValue };
    navigate("/job/job-list", { state });
  };
  const handleChange = (e) => {
    setPropValue(e.target.value);
  };
  return (
    <div className="disc ml-[100px] grid grid-cols-2 gap-5 h-[85vh]">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-green-600 to-gray-700 text-transparent bg-clip-text">
          Find your Dream Job
        </h1>

        <p>
          Discover the perfect job for you in Ethiopia. Whether you are seeking
          new opportunities or looking to advance your career, Felagi is here to
          help you find your dream job. Our platform offers a wide range of job
          listings, from entry-level positions to executive roles, in various
          industries. Start your job search today and take the next step towards
          a fulfilling career.
        </p>
        <div className="flex gap-2 bg-[#D7E4C0] p-2 rounded items-center">
          <input
            type="text"
            placeholder="Search by Jobs title......"
            className=" bg-transparent text-black w-[400px] placeholder:text-black border-none outline-none px-2 py-1"
            value={propValue}
            onChange={handleChange}
          />

          <button
            className="bg-[#328572]  px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md"
            onClick={handleClick}
          >
            Find job
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[300px] h-[300px] bg-[#999999] rounded">
          <img src={right} alt="right" />
        </div>
      </div>
    </div>
  );
}
export default Discription;
