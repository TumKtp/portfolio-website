import React from "react";

export default function ProjectCard({ current, handleSlideClick, slide }) {
  const { src, button, headline, index } = slide;
  const slideClick = () => {
    handleSlideClick(slide.index);
  };

  let classNames = "slide";
  if (current === index) classNames += " slide--current";
  else if (current >= index) classNames += " slide--previous";
  else if (current <= index) classNames += " slide--next";

  return (
    <div
      className={"card mx-3 " + classNames}
      style={{ width: "30rem" }}
      onClick={slideClick}
    >
      <img className="card-img-top" height="50%" alt={headline} src={src} />
      <div className="card-body">
        <h5 className="card-title">{headline}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
