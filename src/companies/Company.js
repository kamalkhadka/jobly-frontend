import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobsList from "../jobs/JobsList";
import UserContext from "../UserContext";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    async function getCompanyAndJobs() {
      const { jobs } = currentUser;
      const c = await JoblyApi.getCompany(handle);

      const jobsIDsAppliedTo = new Set(jobs.map((job) => job.id));

      // add key for each job in company if it is applied to ---
      // this let us handle the "apply/applied" button
      c.jobs = c.jobs.map((job) => ({
        ...job,
        state: jobsIDsAppliedTo.has(job.id) ? "applied" : null,
      }));

      setCompany(c);
    }

    getCompanyAndJobs();
  }, [handle, currentUser]);

  async function apply(jobId) {
    if (company && Array.isArray(company.jobs)) {
      let message = await JoblyApi.applyToJob(jobId);
      setCompany((c) => {
        let newCompany = { ...c };
        newCompany.jobs = newCompany.jobs.map((job) =>
          job.id === jobId ? { ...job, state: message } : job
        );
        return newCompany;
      });
    }
  }

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h5 className="text-capitalize">{company.name}</h5>
      <p>{company.description}</p>
      <JobsList jobs={company.jobs} handleApply={apply} />
    </div>
  );
};

export default Company;
