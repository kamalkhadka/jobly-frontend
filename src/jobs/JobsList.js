import React from "react";
import JobCard from "./JobCard";

const JobsList = ({ jobs, handleApply }) => {
  

  return jobs.map((job) => (
    <div key={job.id} className="mb-4 text-left">
      <JobCard
        title={job.title}
        salary={job.salary}
        equity={job.equity}
        state={job.state}
        apply={() => handleApply(job.id)}
      />
    </div>
  ));
};

export default JobsList;
