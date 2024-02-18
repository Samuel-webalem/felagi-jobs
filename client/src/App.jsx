import { Route, Routes } from "react-router-dom"
import Login from "./components/Auth/Login"
import Hero from "./components/Hero/Hero"
import Register from "./components/Auth/Register"
import EmployerRegister from "./components/Auth/EmployerRegister"
import EmployeeRegister from "./components/Auth/EmployeeRegister"
import AdminDashboard from "./page/AdminDashboard"
import AdminEmployee from "./page/AdminEmployee"
import AdminEmployer from "./page/AdminEmployer"
import AdminJobPost from "./page/AdminJobPost"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/account/register/employer" element={<EmployerRegister />} />
      <Route path="/account/register/employee" element={<EmployeeRegister />} />
      <Route path="/control/dashboard-summary" element={<AdminDashboard />} />
      <Route path="/control/employees" element={<AdminEmployee />} />
      <Route path="/control/employers" element={<AdminEmployer />} />
      <Route path="/control/job-posts" element={<AdminJobPost />} />
    </Routes>
  );
}

export default App
