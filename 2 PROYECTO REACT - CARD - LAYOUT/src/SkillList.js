import React from "react";
import { skills } from ".";
import { Skill } from "./Skill";

export function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skillName={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
