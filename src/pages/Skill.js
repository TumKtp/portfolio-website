import React, { useEffect } from "react";
import SkillBar from "../components/SkillBar";
const skillList = [
  { title: "HTML5", percent: "80%" },
  { title: "CSS3", percent: "70%" },
  { title: "jQuery", percent: "60%" },
  { title: "Photoshop", percent: "50%" },
  { title: "SEO", percent: "40%" },
  { title: "Python", percent: "30%" },
  { title: "JavaScript", percent: "80%" },
  { title: "GoogleApi", percent: "80%" },
  { title: "React", percent: "80%" },
  { title: "NodeJS", percent: "80%" },
  { title: "MongoDB", percent: "80%" },
  { title: "Express", percent: "80%" },
  { title: "DataSci", percent: "80%" },
  { title: "Heroku", percent: "80%" },
];
export default function Skill() {
  return (
    <section className="skill pt-5">
      <div class="heading-dark d-flex justify-content-center mb-4">Skills</div>

      <div className="row mx-3">
        {skillList.map((skill) => (
          <div className="col-lg-6">
            <SkillBar title={skill.title} percent={skill.percent} />
          </div>
        ))}
      </div>
    </section>
  );
}
