import React from "react";
import Headshot from "../sections/Headshot";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Tiktok from "../sections/Tiktok";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10">
      <Headshot />
      <Skills />
      <Projects />
      <Tiktok />
      <Contact />
    </div>
  );
};

export default LandingPage;
