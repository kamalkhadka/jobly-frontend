import React, { useEffect, useState } from "react";
import JoblyApi from "../JoblyApi";
import JobsList from "./JobsList";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      setJobs(await JoblyApi.getJobs());
    }

    getJobs();
  }, []);

  async function handleApply(jobId) {
    let message = await JoblyApi.applyToJob(jobId);
    setJobs((j) =>
      j.map((job) => (job.id === jobId ? { ...job, state: message } : job))
    );
  }

  return <JobsList jobs={jobs} handleApply={handleApply}/>;
};

export default Jobs;
