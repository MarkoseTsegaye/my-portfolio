"use client";
import React from "react";
import SkillsBlock from "../blocks/SkillsBlock";
import {
  frameworks,
  languages,
  databasesAndCloud,
  platformsAndTooling,
} from "@/app/constants/skills";

const Skills = () => {
  return (
    <div id="skills" className="py-[4%] scroll-mt-8">
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[5%]">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[6fr_9fr_7fr_7fr] gap-4 sm:gap-6 items-stretch">
        <SkillsBlock title="Languages" tags={Object.values(languages)} index={0} />
        <SkillsBlock
          title="Frameworks & Libraries"
          tags={Object.values(frameworks)}
          index={1}
        />
        <SkillsBlock
          title="Databases & Cloud"
          tags={Object.values(databasesAndCloud)}
          index={2}
        />
        <SkillsBlock
          title="Platforms & Tooling"
          tags={Object.values(platformsAndTooling)}
          index={3}
        />
      </div>
    </div>
  );
};

export default Skills;
