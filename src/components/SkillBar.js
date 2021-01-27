import React from "react";

export default function SkillBar({ title, percent }) {
  return (
    <div className="skillbar clearfix" data-percent={percent}>
      <div className="skillbar-title" style={{ background: "#f9e547" }}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={{ background: "#f9e547" }} />
      <div className="skill-bar-percent">{percent}</div>
    </div>
  );
}
