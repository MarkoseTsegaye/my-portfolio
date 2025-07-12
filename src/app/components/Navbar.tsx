"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const links = () => {
    return (
      <>
        <Link
          href="/about"
          className="hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-colors text-xl md:text-xl"
        >
          About
        </Link>
        <Link
          href="/experience"
          className="hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-colors text-xl md:text-xl"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-colors text-xl md:text-xl"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:bg-accent hover:text-accent-foreground p-2 px-2 rounded-md transition-colors text-xl md:text-xl"
        >
          Contact
        </Link>
        
      </>
    );
  };
  return (
    <div className="w-full h-max py-8 bg-background text-foreground flex items-center justify-center px-4 ">
      <div className="text-sm font-medium w-full flex justify-start items-center whitespace-nowrap ">
        <h1 className="md:text-3xl lg:text-5xl ">Markose Tsegaye</h1>
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
            <div className="absolute top-full right-0 mt-2 flex flex-col bg-card text-card-foreground border border-border rounded-md shadow-lg z-50 min-w-[200px]">
              <div className="p-4 space-y-2 flex flex-col">{links()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
