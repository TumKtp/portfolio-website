import React from "react";

export default function SkillBar({ title, percent }) {
  return (
    <div className="skillbar clearfix" data-percent={percent}>
      <div className="skillbar-title" style={{ background: "#333333" }}>
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={{ background: "#525252" }} />
      <div className="skill-bar-percent">{percent}</div>
    </div>
  );
}
