import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 4,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
  {
    index: 5,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  console.log(current, 100 / slideData.length);
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slideData.length)}%)`,
  };

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
      <div class="heading d-flex justify-content-center mb-4">Projects</div>
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
          <i className="fas fa-arrow-left fa-lg "></i>
        </a>
        <a onClick={handleNextClick} className="next mx-2">
          <i className="fas fa-arrow-right fa-lg"></i>
        </a>
      </div>
    </section>
  );
}
