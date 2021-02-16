import React from "react";

export default function ProjectCard({ current, handleSlideClick, slide }) {
  const {
    src,
    headline,
    index,
    desc,
    githubLink,
    productionLink,
    techStack,
  } = slide;
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
        <img
          className="card-img-top slide-img"
          alt={headline}
          src={src}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">
            <b>{headline}</b>
          </h5>
          <p className="card-text">{desc}</p>
          {techStack && (
            <h6 className="card-title">
              <b>Tech Stack</b>
            </h6>
          )}
          <ul>{techStack && techStack.map((tech) => <li>{tech}</li>)}</ul>
          <div className="d-flex project-badge mt-2">
            {githubLink && (
              <i
                className="fab fa-github fa-fw github-badge"
                onClick={githubLink}
              />
            )}
            {productionLink && (
              <i
                className="fab fa-chrome fa-fw website-badge"
                onClick={productionLink}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
