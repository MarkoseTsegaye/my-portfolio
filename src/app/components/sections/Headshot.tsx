"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useHeadshot } from "../HeadshotProvider";

const Headshot = () => {
  const { isPastHero, heroRef } = useHeadshot();

  const handleDownloadResume = () => {
    const resumeUrl = "files/Markose_Tsegaye_SWE_Intern_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Markose_Tsegaye_Resume.pdf";
    link.click();
  };
  return (
    <motion.div
      id="home"
      className="flex flex-col items-center justify-center gap-6 text-center md:w-1/2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        ref={heroRef}
        className="flex items-center justify-center h-[200px] w-[200px] md:h-[250px] md:w-[250px]"
      >
        {!isPastHero && (
          <motion.div
            layoutId="profile-avatar"
            transition={{ type: "tween", duration: 0.33, ease: "easeInOut" }}
          >
            <Image
              src="/headshot.png"
              alt="Headshot"
              width={250}
              height={250}
              priority
              className="rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
            />
          </motion.div>
        )}
      </div>
      <div className="text-center gap-3 flex flex-col">
        <h1 className="text-2xl text-muted-foreground">Hi, I&apos;m </h1>
        <h1 className="text-4xl xs:text-5xl font-semibold whitespace-nowrap">
          Markose Tsegaye
        </h1>
        <p className="text-2xl text-foreground/80">Software Engineer</p>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 ">
          <Button
            leftImageSrc="mdi:file-pdf"
            onClick={() => {
              handleDownloadResume();
            }}
            ctaButton={"mdi:arrow-down"}
            className="cursor-pointer hover:bg-foreground text-accent text-center text-lg rounded-lg hover:text-background transition-colors"
          >
            Resume
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Headshot;
