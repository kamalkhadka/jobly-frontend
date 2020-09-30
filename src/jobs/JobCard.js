import React from "react";

const JobCard = ({ title, salary, equity, state, apply }) => {


  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Salary: {salary}</p>
        <p className="card-text">Equity: {equity}</p>
        <button
          className="btn btn-danger font-weight-bold text-uppercase float-right"
          disabled={state}
          onClick={apply}
        >
          {state ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
