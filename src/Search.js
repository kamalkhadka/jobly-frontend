import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(search);
  }

  function handleChange(evt) {
    setSearch(evt.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-lg mb-3">
        <input
          name="search"
          type="text"
          className="form-control"
          value={search}
          onChange={handleChange}
          placeholder="Enter search term..."
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
