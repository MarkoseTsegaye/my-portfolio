"use client";
import React from "react";
import SkillsBlock from "../blocks/SkillsBlock";
import SectionHeading from "../ui/SectionHeading";
import {
  frameworksAndTechnologies,
  langauges,
  tools,
} from "@/app/constants/skills";

const Skills = () => {
  return (
    <div id="skills" className="py-[6%] scroll-mt-8">
      <div className="flex justify-center pb-[5%]">
        <SectionHeading kicker="My toolkit" title="Skills" />
      </div>
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
