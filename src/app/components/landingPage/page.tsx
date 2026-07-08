import React from "react";
import Headshot from "../sections/Headshot";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Leadership from "../sections/Leadership";
import Contact from "../sections/Contact";
import Tiktok from "../sections/Tiktok";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-[8%] px-4 border-b border-border">
        <Headshot />
        <About />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Leadership />
      <Tiktok />
      <Contact />
    </div>
  );
};

export default LandingPage;
