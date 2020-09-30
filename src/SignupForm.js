import React from "react";
import { useHistory } from "react-router-dom";
import useFormData from "./hooks/useFormData";
import JoblyApi from "./JoblyApi";

const SignupForm = ({ setToken }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  };
  const [formData, handleChange] = useFormData(INITIAL_STATE);

  async function handleSubmit(evt) {
    evt.preventDefault();
    const token = await JoblyApi.signup(formData);
    setToken(token);
    history.push("/jobs");
  }
  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="r_username">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            name="username"
            id="r_username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="r_password">
            <strong>Password</strong>
          </label>
          <input
            name="password"
            id="r_password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignupForm;
