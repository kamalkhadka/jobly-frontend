import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="">
      <h1>Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome back {currentUser.first_name}</h2>
      ) : (
        <Link to="/login" className="btn btn-primary">Log in</Link>
      )}
    </div>
  );
};

export default Home;
