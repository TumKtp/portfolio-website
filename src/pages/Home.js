import React from "react";

export default function Home() {
  return (
    <section
      class="home d-flex"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}"/images/home.jpg")`,
      }}
    >
      <div class="align-self-end container-lg home-content pb-5">
        <div class="text-1">Hello, my name is</div>
        <div class="text-2">Kittiphop Vichitkijja</div>
        <div class="text-3">
          I'm a <span>Software Developer</span>
        </div>
      </div>
    </section>
  );
}
