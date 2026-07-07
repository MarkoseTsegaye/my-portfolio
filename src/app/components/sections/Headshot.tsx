"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "../ui/Button";
import { socialLinks } from "@/app/constants/links";

const Headshot = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "files/Markose_Tsegaye_SWE_Intern_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Markose_Tsegaye_Resume.pdf";
    link.click();
  };

  return (
    <div
      id="about"
      className="w-full flex flex-col py-[10%] xs:py-[9%] bg-background text-foreground items-center border-b-2 border-border justify-center"
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Text block */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-4 py-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Open to Summer 2026 SWE roles
          </span>

          <div className="flex flex-col gap-2">
            <p className="text-lg xs:text-xl font-bold text-muted-foreground">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl xs:text-7xl font-black tracking-tighter leading-[0.95]">
              Markose
              <br />
              Tsegaye
            </h1>
          </div>

          <p className="text-xl xs:text-2xl font-extrabold text-primary">
            Software Developer
          </p>

          <p className="text-base xs:text-lg text-foreground/80 leading-relaxed max-w-md">
            CS student at George Mason University building fast, reliable
            products across mobile and backend — from real-time platforms to
            payment flows serving millions.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <div className="w-52">
              <Button
                leftImageSrc="mdi:file-pdf-box"
                onClick={handleDownloadResume}
                ctaButton={"mdi:arrow-down"}
              >
                Resume
              </Button>
            </div>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-border bg-card hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Icon icon="mdi:github" className="w-6 h-6" />
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-border bg-card hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Headshot */}
        <div className="relative shrink-0">
          <div className="absolute -inset-2 rounded-full bg-primary/20 blur-2xl" />
          <Image
            src="/headshot.png"
            alt="Markose Tsegaye"
            width={260}
            height={260}
            priority
            className="relative rounded-full border-4 border-border w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] md:w-[260px] md:h-[260px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Headshot;
