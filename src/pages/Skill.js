import React, { useEffect } from "react";
import SkillBar from "../components/SkillBar";
const skillList = [
  { title: "HTML", percent: "85%" },
  { title: "JavaScript", percent: "90%" },
  { title: "C++", percent: "90%" },
  { title: "Python", percent: "80%" },
  { title: "PHP", percent: "65%" },
  { title: "Django", percent: "70%" },
  { title: "React", percent: "87%" },
  { title: "NextJS", percent: "85%" },
  { title: "NodeJS", percent: "90%" },
  { title: "MongoDB", percent: "80%" },
  { title: "Express", percent: "90%" },
  { title: "Firebase", percent: "85%" },
  { title: "Heroku", percent: "80%" },
  { title: "Bootstrap", percent: "90%" },
  { title: "Figma", percent: "60%" },
  { title: "SEO", percent: "80%" },
];
export default function Skill() {
  return (
    <section className="skill py-5 skill-sec">
      <div className="container">
        <div className="heading-dark d-flex justify-content-center mb-4">
          Skills
        </div>

        <div className="row">
          {skillList.map((skill) => (
            <div className="col-lg-6">
              <SkillBar title={skill.title} percent={skill.percent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
