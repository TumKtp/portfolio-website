import React from "react";

export default function Home() {
  return (
    <section
      className="home d-flex"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}"/images/home.jpg")`,
      }}
    >
      <div className="align-self-end container-lg home-content pb-5">
        <div className="text-1">Hello, my name is</div>
        <div className="text-2">Kittiphop Vichitkijja</div>
        <div className="text-3">
          I'm a <span>Software Developer</span>
        </div>
      </div>
    </section>
  );
}
