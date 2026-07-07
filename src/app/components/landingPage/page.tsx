import React from "react";
import Headshot from "../sections/Headshot";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Leadership from "../sections/Leadership";
import Contact from "../sections/Contact";
import Tiktok from "../sections/Tiktok";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10">
      <Headshot />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Leadership />
      <Tiktok />
      <Contact />
    </div>
  );
};

export default LandingPage;
