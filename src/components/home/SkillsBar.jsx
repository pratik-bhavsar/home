import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <span class="badge text-bg-primary">{skill}</span>
    </div>
  );
}

export default SkillsBar;
