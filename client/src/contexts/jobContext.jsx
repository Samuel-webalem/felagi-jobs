import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const JobContext = React.createContext();

export function useJob() {
  return useContext(JobContext);
}

export function JobProvider(props) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/jobs")
      .then((response) => {
        setJobs(response.data.data.jobsdata);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const value = {
    jobs,
    loading,
    error,
  };
 useEffect(() => {
   console.log(jobs);
 }, [jobs]);
  return (
    <JobContext.Provider value={value}>{props.children}</JobContext.Provider>
  );
}
