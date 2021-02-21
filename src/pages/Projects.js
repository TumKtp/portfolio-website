import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
const slideData = [
  {
    index: 0,
    headline: "Huayitang TCM Clinic",
    src: process.env.PUBLIC_URL + "/images/huayitang.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    productionLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["React (NextJS)", "Bootstrap & Material Design", "Firebase"],
  },
  {
    index: 1,
    headline: "Inventory System",
    src: process.env.PUBLIC_URL + "/images/inventory-system.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    productionLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["React", "Express", "Mongo", "NodeJS", "Bootstrap", "Heroku"],
  },
  {
    index: 2,
    headline: "Campground Website",
    src: process.env.PUBLIC_URL + "/images/yelpcamp.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    productionLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["NodeJS", "MongoDB", "Express", "Bootstrap", "Heroku"],
  },
  {
    index: 3,
    headline: "Mobile Application",
    src: process.env.PUBLIC_URL + "/images/flutter-app.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["Flutter", "Firebase"],
  },
  {
    index: 4,
    headline: "Blog Website",
    src: process.env.PUBLIC_URL + "/images/blog-website.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["Django", "HTML", "CSS"],
  },
  {
    index: 5,
    headline: "TODO REST API",
    src: process.env.PUBLIC_URL + "/images/django-rest.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["Django REST framework"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  console.log(current, 100 / slideData.length);
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slideData.length)}%)`,
  };
  console.log(wrapperTransform);
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slideData.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slideData.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <section className="py-5 project-sec">
      <div className="heading d-flex justify-content-center">Projects</div>
      <div className="slider">
        <ul className="slider__wrapper" style={wrapperTransform}>
          {slideData.map((slide) => {
            return (
              <ProjectCard
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            );
          })}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <a onClick={handlePreviousClick} className="previous mx-2">
          <i className="fas fa-arrow-left fa-lg"></i>
        </a>
        <a onClick={handleNextClick} className="next mx-2">
          <i className="fas fa-arrow-right fa-lg"></i>
        </a>
      </div>
    </section>
  );
}
