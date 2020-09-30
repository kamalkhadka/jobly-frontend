import React, { useContext } from "react";
import Alert from "./Alert";
import useFormData from "./hooks/useFormData";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, handleChange, setFormData] = useFormData({
    username: currentUser.username,
    first_name: currentUser.first_name || "",
    last_name: currentUser.last_name || "",
    email: currentUser.email || "",
    photo_url: currentUser.photo_url || "",
    password: "",
    success: false,
    errors: [],
  });

  async function handleSubmit(evt) {
    evt.preventDefault();

    let updatedCustomer = {
      first_name: formData.first_name || undefined,
      last_name: formData.last_name || undefined,
      email: formData.email || undefined,
      photo_url: formData.photo_url || undefined,
      password: formData.password,
    };
    try {
      let updatedUser = await JoblyApi.updateCurrentUser(
        formData.username,
        updatedCustomer
      );

      setFormData((formData) => ({
        ...formData,
        errors: [],
        success: true,
        password: "",
      }));

      setCurrentUser(updatedUser);
    } catch (errors) {
      setFormData((formData) => ({
        ...formData,
        errors,
      }));
    }
  }
  return (
    <div className="text-left row ">
      <div className="col-6 border m-auto">
        <h2>Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <strong>Username</strong>
            </label>
            <p>{formData.username}</p>
          </div>
          <div className="form-group">
            <label htmlFor="first_name">
              <strong>First name</strong>
            </label>
            <input
              name="first_name"
              id="first_name"
              type="text"
              onChange={handleChange}
              value={formData.first_name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">
              <strong>Last name</strong>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={handleChange}
              value={formData.last_name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo_url">
              <strong>Photo URL</strong>
            </label>
            <input
              type="url"
              id="photo_url"
              name="photo_url"
              value={formData.photo_url}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Confirm password to make changes:</strong>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {formData.errors.length ? (
            <Alert type="danger" message={formData.errors} />
          ) : null}

          {formData.success ? (
            <Alert type="success" message="User updated successfully." />
          ) : null}

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
