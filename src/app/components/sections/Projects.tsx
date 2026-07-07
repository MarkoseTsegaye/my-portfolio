"use client";
import React from "react";
import ProjectBlock from "../blocks/ProjectBlock";
import { motion } from "framer-motion";
import { projects } from "@/app/constants/projects";
import SectionHeading from "../ui/SectionHeading";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-[6%] scroll-mt-8"
    >
      <div className="flex justify-center pb-[5%]">
        <SectionHeading kicker="Things I've built" title="Projects" />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-stretch gap-10 lg:gap-8">
        {Object.values(projects).map((project) => (
          <ProjectBlock key={project.title} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
