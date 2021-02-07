import React from "react";

export default function ProjectCard({ current, handleSlideClick, slide }) {
  const { src, headline, index, desc } = slide;
  const slideClick = () => {
    handleSlideClick(slide.index);
  };

  let classNames = "slide";
  if (current === index) classNames += " slide-current";
  else if (current >= index) classNames += " slide-previous";
  else if (current <= index) classNames += " slide-next";

  return (
    <div className={classNames}>
      <div
        className="card m-3 mt-4"
        style={{ width: "20rem", height: "450px" }}
        onClick={slideClick}
      >
        <img className="card-img-top slide-img" alt={headline} src={src} />
        <div className="card-body">
          <h5 className="card-title">{headline}</h5>
          <p className="card-text">{desc.slice(0, 150) + "..."}</p>
          <div className="d-flex project-badge">
            <i className="fab fa-github fa-fw github-badge" />
            <i className="fab fa-chrome fa-fw website-badge" />
          </div>
        </div>
      </div>
    </div>
  );
}
