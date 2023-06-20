import React from "react";
import "./../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand">
          <h1>ApiDataFetching</h1>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
