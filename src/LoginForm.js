import React from "react";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";
import useFormData from "./hooks/useFormData";
import JoblyApi from "./JoblyApi";

const LoginForm = ({ setToken }) => {
  const history = useHistory();
  const INITIAL_STATE = { username: "", password: "" };

  const [formData, handleChange, setFormData] = useFormData(INITIAL_STATE);

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      const token = await JoblyApi.login(formData);

      setToken(token);
      history.push("/jobs");
    } catch (errors) {
      setFormData((formData) => ({ ...formData, errors }));
    }
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control"
          />
        </div>
        {formData.errors ? (
          <Alert type="danger" message={formData.errors} />
        ) : null}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
