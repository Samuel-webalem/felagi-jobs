import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import EmployerRegister from "./components/Auth/EmployerRegister";
import EmployeeRegister from "./components/Auth/EmployeeRegister";
import AdminDashboard from "./page/AdminDashboard";
import AdminEmployee from "./page/AdminEmployee";
import AdminJobPost from "./page/AdminJobPost";
import Header from "./components/Admin/header/header.jsx";
import JobsList from "./components/Admin/Job/jobList.jsx";
import JobsDetail from "./components/Admin/Job/JobDetail.jsx";
import JobApplied from './components/Admin/Job/JobApplied';
import AboutUs from "./components/Admin/AboutUs/Aboutus.jsx";
import Footer from "./components/Admin/Footer/Footer.jsx";
import Discription from "./components/Hero/Discription.jsx";
import JobApplication from "./components/Admin/Job/JobApplication.jsx";
import ThankYouPage from "./components/Admin/Job/ThankYou.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route
          path="/account/register/employer"
          element={<EmployerRegister />}
        />
        <Route
          path="/account/register/employee"
          element={<EmployeeRegister />}
        />
        <Route path="/control/dashboard-summary" element={<AdminDashboard />} />
        <Route path="/control/post-job" element={<AdminEmployee />} />
        <Route path="/control/job-posts" element={<AdminJobPost />} />
        <Route path="/job/job-detail/:id" element={<JobsDetail />} />
        <Route path="/job/apply/:id" element={<JobApplication />} />
        <Route path="/job/job-list" element={<JobsList />} />
        <Route path="/job/job-applied" element={<JobApplied />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Discription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
