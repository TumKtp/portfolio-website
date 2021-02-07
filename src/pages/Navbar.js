import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-lg">
        <a className="navbar-brand py-auto" href="#" id="navBrandId">
          Portfolio
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#" id="navLinkId">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="navLinkId">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="navLinkId">
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="navLinkId">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="navLinkId">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
