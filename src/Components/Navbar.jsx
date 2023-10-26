import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h4>NEWS Pulse</h4>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <button className="btn-nav">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/general">
                  General
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/business">
                  Business
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/technology">
                  Technology
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/entertainment">
                  Entertainment
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/science">
                  Science
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/sports">
                  Sports
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button className="btn-nav">
                <Link className="nav-link active" aria-current="page" to="/health">
                  Health
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
