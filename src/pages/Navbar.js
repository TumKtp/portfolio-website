import React from "react";

export default function Navbar() {
  const toHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toAbout = () => {
    const aboutSection = document.querySelector(".about-me").offsetTop;
    window.scrollTo({
      top: aboutSection - 100,
      behavior: "smooth",
    });
  };
  const toSkill = () => {
    const skillSection = document.querySelector(".skill-sec").offsetTop;
    console.log(skillSection);
    if (window.scrollY != skillSection)
      window.scrollTo({
        top: skillSection - 100,
        behavior: "smooth",
      });
  };
  const toProject = () => {
    const projectSection = document.querySelector(".project-sec").offsetTop;
    window.scrollTo({
      top: projectSection - 100,
      behavior: "smooth",
    });
  };
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
              <a
                className="nav-link"
                id="navLinkId"
                style={{ cursor: "pointer" }}
                onClick={toHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navLinkId"
                style={{ cursor: "pointer" }}
                onClick={toAbout}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navLinkId"
                style={{ cursor: "pointer" }}
                onClick={toSkill}
              >
                Skill
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="navLinkId"
                style={{ cursor: "pointer" }}
                onClick={toProject}
              >
                Projects
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link"  id="navLinkId" style={{cursor:"pointer"}}>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
