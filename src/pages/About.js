import React from "react";

export default function About() {
  return (
    <section className="about-me">
      <div className="heading d-flex justify-content-center mb-4">About Me</div>
      <div className="row justify-content-center mx-1 mx-xl-5 mb-5">
        <img
          className="col-12 col-md-6 col-xl-5 align-self-center about-img"
          src={process.env.PUBLIC_URL + "/images/about-01.jpg"}
        />
        <div className="col-12 col-md-6 col-xl-7 align-self-center mt-3 mt-s-0">
          <div className="title">
            I'm Kittiphop and I'm a <span>Developer</span>
          </div>
          <div className="about-content">
            I am so interested in technologies and want to learn more about how
            to become a Full-Stack developer. Moreover, I always spend my free
            time learning new technologies by myself. In the future, I want to
            be a start-up founder.
          </div>
          <button className=" btn-about hover-border-1 mt-3">
            <span>More Info</span>
          </button>
        </div>
        <div className="col-12 col-md-6 col-xl-9 align-self-center mt-3 mt-s-0"></div>
      </div>
    </section>
  );
}
