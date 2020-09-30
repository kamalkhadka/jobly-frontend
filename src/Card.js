import React from "react";

const Card = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
