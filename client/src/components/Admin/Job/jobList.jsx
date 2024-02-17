const data = [
  {
    company: "ABC Company",
    title: "Software Engineer",
    description:
      "We are looking for a skilled software engineer to join our team.",
    requirement: "Bachelor's degree in Computer Science or related field.",
    responsibility: "Developing high-quality software design and architecture.",
    salary: "80000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "XYZ Company",
    title: "Marketing Manager",
    description: "Seeking a creative and strategic marketing manager.",
    requirement: "5+ years of experience in marketing.",
    responsibility: "Developing marketing campaigns and strategies.",
    salary: "90000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "123 Company",
    title: "Customer Service Representative",
    description:
      "Join our customer service team and help resolve customer issues.",
    requirement: "Excellent communication skills.",
    responsibility: "Handling customer inquiries and resolving complaints.",
    salary: "50000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "456 Company",
    title: "Graphic Designer",
    description:
      "Looking for a creative graphic designer to create engaging designs.",
    requirement: "Proficiency in Adobe Creative Suite.",
    responsibility:
      "Creating visual elements for websites, social media, and print.",
    salary: "60000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "789 Company",
    title: "Accountant",
    description: "Join our finance team as an accountant.",
    requirement: "CPA certification preferred.",
    responsibility: "Preparing financial statements and reports.",
    salary: "70000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "ABC Company",
    title: "Human Resources Manager",
    description:
      "Seeking an experienced HR manager to oversee human resources.",
    requirement: "Bachelor's degree in HR or related field.",
    responsibility: "Managing HR operations and employee relations.",
    salary: "80000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "XYZ Company",
    title: "Web Developer",
    description: "Join our web development team to create innovative websites.",
    requirement: "Proficiency in HTML, CSS, and JavaScript.",
    responsibility: "Developing and maintaining websites.",
    salary: "70000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "123 Company",
    title: "Sales Manager",
    description: "Lead our sales team to achieve sales targets.",
    requirement: "Proven experience in sales management.",
    responsibility: "Developing sales strategies and managing sales teams.",
    salary: "90000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "456 Company",
    title: "Data Analyst",
    description: "Join our data analytics team to analyze and interpret data.",
    requirement: "Strong analytical skills and attention to detail.",
    responsibility: "Analyzing data and generating reports.",
    salary: "75000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
  {
    company: "789 Company",
    title: "Operations Manager",
    description: "Manage day-to-day operations of our company.",
    requirement: "Proven experience in operations management.",
    responsibility: "Overseeing daily operations and ensuring efficiency.",
    salary: "85000",
    type: "Full time",
    location: "Addis Ababa, Ethiopia",
  },
];

const Dashboard = () => {
  return (
    <div className="grid">
      <div className="flex m-5 justify-between">
        <div className="flex  gap-2 w-[40%] bg-[#D7E4C0] p-2 rounded ">
          <input
            type="text"
            placeholder="Search by Jobs title. ....."
            className=" bg-transparent text-black w-[400px] placeholder:text-black border-none outline-none px-2 py-1"
          />

          <button className="bg-[#328572]  px-5 py-2 rounded text-[#ffffff] cursor-pointer shadow-md">
            Find job
          </button>
        </div>
        <div className="flex h-1/2  w-[30%] flex-col bg-[#D7E4C0] items-center">
          <select
            id="filter"
            className="mt-1 block w-full p-2 bg-[#D7E4C0] rounded-md"
          >
            <option value="" disabled selected hidden>
              Filter
            </option>
            <optgroup label="Type">
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </optgroup>
            <optgroup label="Location">
              <option value="onsite">Onsite</option>
              <option value="remote">Remote</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-start h-screen">
        {data.map((job, index) => (
          <div
            key={index}
            className="w-[30%] p-10 border bg-[#D7E4C0] border-gray-300 m-5 rounded-md mb-4"
          >
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-lg mt-5">
              {" "}
              <span className="font-bold">company : </span>
              {job.company}
            </p>
            <p className="text-lg">
              <span className="font-bold">Location :</span> {job.location}
            </p>
            <div className="flex justify-between items-center">
              <div className="date mt-5">
                <p className="text-blue-800">2 days ago</p>
              </div>
              <div className="detail">
                <p className="text-bold text-blue-500 mt-5 text-lg">
                  View Job Detail
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
