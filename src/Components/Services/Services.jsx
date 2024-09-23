import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <>
    <div className="mainCard">
      <div className="Services-wrapper">
        <div className="Services-left">
          <ul>
            <li className="servHead">Our Services</li>
          </ul>
        </div>
        <div className="Services-right">
          <p className="servDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="servDesc-clr">
              Id inventore delectus non expedita laudantium eius necessitatibus
              nulla excepturi sunt unde.
            </span>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h1 className="card-head">BRAND IDENTITY</h1>
          <FontAwesomeIcon icon={faArrowUpRightDots} className="card-icon" />
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            soluta autem, odit, quos ullam vitae asperiores tempore, alias
            temporibus explicabo deserunt accusamus!
          </p>
        </div>

        <div className="card">
          <h1 className="card-head">UX/UI DESIGN</h1>
          <FontAwesomeIcon icon={faArrowUpRightDots} className="card-icon" />
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            cum inventore incidunt facere impedit laudantium similique, possimus
            commodi sunt aliquam?
          </p>
        </div>

        <div className="card">
          <h1 className="card-head">WEBFLOW DEVELOPER</h1>
          <FontAwesomeIcon icon={faArrowUpRightDots} className="card-icon" />
          <p className="card-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure
            reprehenderit deleniti a natus repudiandae quo, eos voluptate
            inventore consequatur?
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Services;
