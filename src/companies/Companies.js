import React from "react";
import CompanyCard from "./CompanyCard";

const Companies = ({ companies }) => {
  return companies.map((company) => (
    <div key={company.handle} className="mb-3 text-left">
      <CompanyCard
        name={company.name}
        description={company.description}
        handle={company.handle}
      />
    </div>
  ));
};

export default Companies;
