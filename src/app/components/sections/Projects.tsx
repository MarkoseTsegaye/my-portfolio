"use client";
import React from "react";
import ProjectBlock from "../blocks/ProjectBlock";
import { motion } from "framer-motion";
import { projects } from "@/app/constants/projects";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="py-[7%]"
    >
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[7%] ">Projects</h1>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-16">
        {Object.values(projects).map((project) => (
          <ProjectBlock
            key={project.title}
            project={project}
          />
        ))}
        
      </div>
    </motion.div>
  );
};

export default Projects;
