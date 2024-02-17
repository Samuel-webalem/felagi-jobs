
import EmploymentChart from "./TriangleBar";

const data = [
  {
    employeeId: 1,
    employerId: 1,
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    position: "Software Engineer",
    salary: 80000,
    count: 3,
  },
  {
    employeeId: 2,
    employerId: 1,
    startDate: "2023-01-01",
    endDate: null,
    position: "Product Manager",
    salary: 90000,
    count: 1,
  },
  {
    employeeId: 3,
    employerId: 2,
    startDate: "2021-06-15",
    endDate: "2023-06-14",
    position: "Marketing Specialist",
    salary: 60000,
    count: 4 ,
  },
];
const Dashboard = () => {
    return (
      <div className="flex flex-col gap-10 items-center">
        <div className="flex gap-8 px-6 w-full">
          <div className="flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white">
            <h4 className="text-sm text-center">
              Total Number Of <br /> Employment
            </h4>
            <p className="text-center text-2xl font-bold">{data.length}</p>
          </div>
          <div className="flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white">
            <h4 className="text-sm text-center">
              Total Number Of <br /> Employee
            </h4>
            <p className="text-center text-2xl font-bold">203</p>
          </div>
          <div className="flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white">
            <h4 className="text-sm text-center">
              Total Number Of <br /> Employee
            </h4>
            <p className="text-center text-2xl font-bold">203</p>
          </div>
          <div className="flex-grow bg-[#2ebc9b] p-4 rounded-md flex flex-col flex-wrap gap-6 text-white">
            <h4 className="text-sm text-center">
              Total Number Of <br /> Employee
            </h4>
            <p className="text-center text-2xl font-bold">203</p>
          </div>
        </div>
        <div className=" h-[300px] w-[400px] bg-gray-100 p-5">
          <h1 className="text-sm mb-5 text-gray-400">
            Employment Relationship
          </h1>
          <EmploymentChart data={data} />
        </div>
      </div>
    );
}

export default Dashboard
