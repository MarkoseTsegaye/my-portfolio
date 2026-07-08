"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="flex flex-col gap-6 md:w-1/2 scroll-mt-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h1 className="text-4xl xs:text-5xl font-bold text-center md:text-left">
        About Me
      </h1>
      <div className="flex flex-col gap-3 text-lg text-muted-foreground">
        <span className="flex items-center gap-2 justify-center md:justify-start">
          <Icon
            icon="mdi:briefcase-outline"
            className="text-2xl text-foreground shrink-0"
          />
          Software Engineer Intern @ Credit Acceptance
        </span>
        <span className="flex items-center gap-2 justify-center md:justify-start">
          <Icon
            icon="mdi:school-outline"
            className="text-2xl text-foreground shrink-0"
          />
          CS Student @ George Mason University
        </span>
      </div>
      <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center md:text-left">
        I&apos;m a Software Engineer Intern at Credit Acceptance and a Computer
        Science student at George Mason University. I have a strong foundation in
        mobile development and full-stack technologies. I love creating
        innovative solutions and continuously learning new technologies.
      </p>
    </motion.div>
  );
};

export default About;
