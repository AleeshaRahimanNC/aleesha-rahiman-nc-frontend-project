import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="bg-cover">
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="container">
            <div className="row gy-3 justify-content-between">
              <div className="col-auto footer-left">
                <h1 className="mb-0">Wefo</h1>
              </div>

              <div className="col footer-right">
                <h4 className="mb-0">Privacy</h4>
                <h4 className="mb-0">Term</h4>
                <h4 className="mb-0">Security</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
