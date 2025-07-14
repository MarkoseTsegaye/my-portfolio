"use client";
import React from "react";
import SkillsBlock from "../blocks/SkillsBlock";
import {
  frameworksAndTechnologies,
  langauges,
  tools,
} from "@/app/constants/skills";

const Skills = () => {
  return (
    <div id="skills" className="py-[4%] scroll-mt-8">
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[5%] ">Skills</h1>
      <div className="flex flex-col md:flex-col w-full justify-between md:justify-between items-center gap-16">
        <SkillsBlock
          title="Languages"
          tags={Object.values(langauges)}
          direction="left"
        />
        <SkillsBlock
          title="Frameworks and Tech"
          tags={Object.values(frameworksAndTechnologies)}
          direction="right"
        />

        <SkillsBlock
          title="Tools"
          tags={Object.values(tools)}
          direction="left"
        />
      </div>
    </div>
  );
};

export default Skills;
