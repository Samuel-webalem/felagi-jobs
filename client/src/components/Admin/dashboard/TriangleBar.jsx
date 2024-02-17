
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



// eslint-disable-next-line react/prop-types
const EmploymentChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="position" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#2ebc9b" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EmploymentChart;
