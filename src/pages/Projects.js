import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
const slideData = [
  {
    index: 0,
    headline: "Huayitang TCM Clinic",

    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    productionLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["React (NextJS)", "Bootstrap & Material Design", "Firebase"],
  },
  {
    index: 1,
    headline: "Inventory System",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
    githubLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    productionLink:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
    techStack: ["React", "Express", "Mongo", "NodeJS", "Bootstrap", "Heroku"],
  },
  {
    index: 2,
    headline: "TODO List",
    desc: "Traditional Chinese Medicine clinic website.",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Image Gallery",
    desc: "Traditional Chinese Medicine clinic website.",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 4,
    headline: "Focus On The Writing",
    desc: "Traditional Chinese Medicine clinic website.",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 5,
    headline: "Focus On The Writing",
    desc: "Traditional Chinese Medicine clinic website.",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
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
    <section className="py-5">
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
