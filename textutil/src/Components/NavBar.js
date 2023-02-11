import React from "react";
import "../CSS/NavBar.css";
import logo from "../Images/pluginIcon.png";
export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" id="logo1" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Web Development
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/html/"
                      target="_blank"
                    >
                      HTML
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/css/"
                      target="_blank"
                    >
                      CSS
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                      target="_blank"
                    >
                      BootStrap
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/js/"
                      target="_blank"
                    >
                      JavaScript
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://nodejs.dev/en/learn/"
                      target="_blank"
                    >
                      Node.Js
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/REACT/DEFAULT.ASP"
                      target="_blank"
                    >
                      React.Js
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/mongodb/"
                      target="_blank"
                    >
                      MongoDB
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.w3schools.com/MySQL/default.asp"
                      target="_blank"
                    >
                      MySQL
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.javatpoint.com/postgresql-tutorial"
                      target="_blank"
                    >
                      PostgreSQL
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
                <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
               <div
                className="bg-secondary rounded mx-2"
                onClick={() => {
                  props.toggleMode("secondary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
                 <div
                className="bg-info rounded mx-2"
                onClick={() => {
                  props.toggleMode("info");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
               <div
                className="bg-dark rounded mx-2"
                onClick={() => {
                  props.toggleMode("dark");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer",border:'1px solid white' }}
              ></div>
                 {/* <div
                className="bg-light rounded mx-2"
                onClick={() => {
                  props.toggleMode("light");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer",border:'1px solid black' }}
              ></div> */}
            </div>
            {/* <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } m-2`}
            >
              <input
                className="form-check-input"
                // onClick={props.toggleMode}
                onClick={() => {
                  props.toggleMode("primary");
                }}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
