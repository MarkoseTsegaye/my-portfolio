"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "../ThemeToggle";
import { motion } from "framer-motion";
import { socialLinks } from "@/app/constants/links";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "tiktok", label: "TikTok" },
    { id: "contact", label: "Contact" },
  ];
  const links = () => {
    return (
      <>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="font-bold hover:bg-accent hover:text-accent-foreground p-2 px-3 rounded-lg transition-all duration-300"
          >
            {item.label}
          </button>
        ))}

        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-lg transition-all duration-300"
        >
          <Icon icon="mdi:github" className="text-3xl" />
        </Link>
      </>
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className={`w-full bg-background/90 py-5 backdrop-blur-md text-foreground flex items-center justify-center px-4 sticky top-0 z-50 border-b-2 border-border transition-all duration-300`}
    >
      <div className="text-sm font-medium w-full flex justify-start items-center whitespace-nowrap ">
        <h1
          className={`font-black tracking-tight transition-all duration-300 text-2xl md:text-3xl lg:text-4xl`}
        >
          Markose Tsegaye
        </h1>
      </div>
      <div className="hidden lg:flex items-center gap-4 justify-end w-full">
        <div className="flex items-center gap-4 px-4">{links()}</div>
        <ThemeToggle />
      </div>
      <div className="relative flex items-center gap-4 justify-end w-full lg:hidden">
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
            <div className="absolute top-full right-0 mt-2 flex flex-col bg-card text-card-foreground border-2 border-border rounded-xl shadow-2xl z-50 min-w-[220px]">
              <div className="p-4 gap-1 flex flex-col items-stretch text-left">
                {links()}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
