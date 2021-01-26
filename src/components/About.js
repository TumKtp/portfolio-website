import React from "react";

export default function About() {
  return (
    <section class="about-me">
      <div class="heading d-flex justify-content-center mb-4">About Me</div>
      <div class="row justify-content-center mx-1 mx-xl-5 mb-5">
        <img
          class="col-12 col-md-5 col-xl-3 about-img align-self-center"
          src={process.env.PUBLIC_URL + "/images/about-01.jpg"}
        />
        <div class="col-12 col-md-5 col-xl-6 align-self-center mt-3 mt-s-0">
          <div class="title">
            I'm Kittiphop and I'm <span>Developer</span>
          </div>
          <div class="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quia
            nam dolore ipsa cumque eum commodi delectus qui, voluptates quasi
            dolor laudantium autem ipsam quas minima facilis modi adipisci ea.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            nam repudiandae rerum eius officiis? Laboriosam nostrum earum
            inventore laborum distinctio, fugit tempora illo unde modi
          </div>
        </div>
      </div>
    </section>
  );
}
