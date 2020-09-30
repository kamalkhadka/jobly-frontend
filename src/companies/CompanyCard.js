import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

const CompanyCard = ({ name, description, handle }) => {
  return (
    <Link className="text-dark" to={`/companies/${handle}`}>
      <Card name={name} description={description} />
    </Link>
  );
};

export default CompanyCard;
