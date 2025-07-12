"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log("Element found:", element);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Element not found for section:", sectionId);
    }
    setMobileMenu(false); // Close mobile menu after clicking
  };

  const links = () => {
    return (
      <>
        <button
          onClick={() => scrollToSection("about")}
          className={`hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-all duration-300 ${
            isScrolled ? "text-lg" : "text-xl md:text-xl"
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className={`hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-all duration-300 ${
            isScrolled ? "text-lg" : "text-xl md:text-xl"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-all duration-300 ${
            isScrolled ? "text-lg" : "text-xl md:text-xl"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-all duration-300 ${
            isScrolled ? "text-2xl" : "text-3xl"
          }`}
        >
          <Icon icon="mdi:email" className="text-3xl" />
        </button>
        <Link
          href="https://github.com/mtsegay"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-all duration-300 ${
            isScrolled ? "text-2xl" : "text-3xl"
          }`}
        >
          <Icon icon="mdi:github" className="text-3xl" />
        </Link>
      </>
    );
  };
  return (
    <div
      className={`w-full bg-background/95 backdrop-blur-sm text-foreground flex items-center justify-center px-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="text-sm font-medium w-full flex justify-start items-center whitespace-nowrap ">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className={`font-bold transition-all duration-300 ${
            isScrolled ? "md:text-2xl lg:text-3xl" : "md:text-3xl lg:text-5xl"
          }`}
        >
          Markose Tsegaye
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="hidden lg:flex items-center gap-4 justify-end w-full"
      >
        <div className="flex items-center gap-4 px-4">{links()}</div>
        <ThemeToggle />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative flex items-center gap-4 justify-end w-full lg:hidden"
      >
        <div className="ml-auto relative flex items-center gap-2">
          <ThemeToggle />
          {mobileMenu ? (
            <Icon
              onClick={() => setMobileMenu(!mobileMenu)}
              icon="mdi:close"
              className="text-2xl cursor-pointer"
            />
          ) : (
            <Icon
              onClick={() => setMobileMenu(!mobileMenu)}
              icon="mdi:menu"
              className="text-2xl cursor-pointer"
            />
          )}
          {mobileMenu && (
            <div className="absolute top-full right-0 mt-2 flex flex-col bg-card text-card-foreground border border-border rounded-md shadow-lg z-50 min-w-[200px]">
              <div className="p-4 space-y-2 flex flex-col">{links()}</div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
