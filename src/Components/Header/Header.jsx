import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="content">
          <div className="title">
            <h1>We create award winning website</h1>
          </div>

          <div className="para">
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aspernatur possimus suscipit iusto repudiandae nihil quibusdam
              itaque? Expedita, fugiat voluptates!
            </h6>
          </div>

          <form className="d-flex" role="search">
            <button className="btn box-out" type="submit">
              Explore
              <FontAwesomeIcon icon={faArrowUpRightDots} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
