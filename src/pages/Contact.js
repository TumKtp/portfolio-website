import React from "react";

export default function Contact() {
  return (
    <section className="skill pt-5 pb-5">
      <div className="heading-dark d-flex justify-content-center mb-4">
        Contact me
      </div>

      <div className="row mx-5">
        <div className="col-6">
          <div className="title-dark">Get in touch.</div>
          <div className="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quia
            nam dolore ipsa cumque eum commodi delectus qui, voluptates quasi
            dolor laudantium autem ipsam quas minima facilis modi adipisci ea.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            nam repudiandae rerum eius officiis? Laboriosam nostrum earum
          </div>
        </div>
        <div className="col-6">
          <div className="title-dark">Message me</div>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <textarea
                className="form-control"
                placeholder="Message.."
              ></textarea>
            </div>
          </div>
          <button className="btn-about hover-border-1">
            <span>send</span>
          </button>
        </div>
      </div>
    </section>
  );
}
