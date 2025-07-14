"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Headshot = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "files/Markose_Tsegaye_Resume_7.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Markose_Tsegaye_Resume.pdf";
    link.click();
  };
  return (
    <div
      id="about"
      className="w-full flex flex-col py-[13%] bg-background text-foreground flex items-center border-b border-foreground/60 justify-center w-full"
    >
      <motion.div
        className="hidden md:flex md:flex-row flex-col items-center justify-center gap-16 rounded-lg  pb-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/headshot.png"
          alt="Headshot"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="text-center gap-3 flex flex-col">
          <h1 className="text-2xl text-muted-foreground">Hi, I&apos;m </h1>
          <h1 className="text-4xl xs:text-5xl font-semibold whitespace-nowrap">
            Markose Tsegaye
          </h1>
          <p className="text-2xl text-foreground/80">Software Developer</p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 ">
            <Button
              leftImageSrc="mdi:file-pdf"
              onClick={() => {
                handleDownloadResume();
              }}
              ctaButton={"mdi:arrow-down"}
              className="cursor-pointer hover:bg-foreground text-accent text-center text-lg rounded-lg hover:text-background   transition-colors"
            >
              Resume
            </Button>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex  md:hidden flex-col items-center justify-center gap-16 rounded-lg  pb-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src="/headshot.png"
          alt="Headshot"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="text-center gap-4 flex flex-col">
          <h1 className="text-2xl text-muted-foreground">Hi, I&apos;m </h1>
          <h1 className="text-4xl xs:text-5xl font-semibold whitespace-nowrap">
            Markose Tsegaye
          </h1>
          <p className="text-2xl text-foreground/80">Software Developer</p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-5 ">
            <Button
              leftImageSrc="mdi:file-pdf"
              onClick={() => {
                handleDownloadResume();
              }}
              ctaButton={"mdi:arrow-down"}
              className="cursor-pointer hover:bg-foreground text-accent rounded-lg hover:text-background  py-2 px-4 transition-colors"
            >
              Resume
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Headshot;
