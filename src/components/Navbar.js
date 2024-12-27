import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleDropdownClick = (color) => {
    if (props.onColorChange) {
      props.onColorChange(color); // Call onColorChange passed via props
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      data-bs-theme={props.mode === "light" ? "light" : "dark"} // Toggle theme dynamically
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav" // Fixed id reference
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Theme
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDropdownClick("primary")}
                  >
                    Blue
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDropdownClick("success")}
                  >
                    Green
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDropdownClick("danger")}
                  >
                    Red
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDropdownClick("warning")}
                  >
                    Yellow
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <div className="form-check form-switch ms-auto">
            <input
              className={`form-check-input text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  onColorChange: PropTypes.func,
};

Navbar.defaultProps = {
  title: "Name of the website",
  aboutText: "About",
  mode: "light", // Default to light mode if not provided
};
