import React, { useEffect, useState } from "react";
import JoblyApi from "../JoblyApi";
import Search from "../Search";
import Companies from "./Companies";

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);


  async function handleSearch(search) {
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }

  const response =
    companies.length > 0 ? (
      <Companies companies={companies} />
    ) : (
      "No results found."
    );

  return (
    <div>
      <Search handleSearch={handleSearch}/>
      {response}
    </div>
  );
};

export default CompaniesList;
