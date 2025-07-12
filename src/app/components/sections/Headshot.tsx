"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Headshot = () => {
  return (
    <div className="w-full flex flex-col py-[12%] bg-background text-foreground flex items-center border-b border-foreground/60 justify-center w-full">
      <motion.div
        className="flex md:flex-row flex-col items-center justify-center gap-16 rounded-lg  pb-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/headshot.png"
          alt="Headshot"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="text-center gap-2 flex flex-col">
          <h1 className="text-2xl text-muted-foreground">Hi, I'm </h1>
          <h1 className="text-4xl xs:text-5xl font-bold whitespace-nowrap">
            Markose Tsegaye
          </h1>
          <p className="text-2xl text-foreground/80">Software Developer</p>
          <div className="flex flex-row items-center justify-center gap-4 ">
            <button className="flex items-center justify-center gap-4 bg-accent hover:bg-accent-foreground text-accent-foreground rounded-lg hover:text-accent-foreground/80 py-2 px-4 transition-colors">
              <h1 className="text-2xl text-muted-foreground">Resume</h1>
              <Icon icon="mdi:file-pdf" className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-4 bg-accent hover:bg-accent-foreground text-accent-foreground rounded-lg hover:text-accent-foreground/80 py-2 px-4 transition-colors">
              <h1 className="text-2xl text-muted-foreground">Contact Info</h1>
              <Icon icon="mdi:file-pdf" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Headshot;
