import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Wefo
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Menu item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu item
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline" type="submit">
                Start a project
                <FontAwesomeIcon icon={faArrowUpRightDots} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
