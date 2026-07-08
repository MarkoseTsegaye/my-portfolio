"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { experienceLinks } from "@/app/constants/links";

type ExperienceItem = {
  title: string;
  company: string;
  companyLink?: string;
  date: string;
  logoLight?: string;
  logoDark?: string;
  icon?: string;
  remote?: boolean;
  tags: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Credit Acceptance",
    companyLink: experienceLinks.creditAcceptance,
    date: "May 2026 – Present",
    logoLight: "/credit-acceptance.png",
    logoDark: "/credit-acceptance-white.png",
    remote: true,
    tags: [
      "React Native",
      "Expo",
      "Mobile Development",
      "Xcode",
      "Android Studio",
    ],
  },
  {
    title: "Software Engineer – Contract",
    company: "The Dumpster Masters",
    date: "May 2025 – July 2025",
    logoLight: "/dumpster-masters.png",
    logoDark: "/dumpster-masters.png",
    remote: true,
    tags: ["React Native", "Expo", "Express.js", "Next.js"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-[7%] scroll-mt-8">
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[5%]">
        Experience
      </h1>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            className="group relative flex flex-col md:flex-row gap-6 md:gap-8 rounded-2xl border border-border bg-background/40 backdrop-blur-sm p-6 sm:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-border bg-background mx-auto md:mx-0">
              {exp.logoLight ? (
                <>
                  <Image
                    src={exp.logoLight}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="block dark:hidden w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                  <Image
                    src={exp.logoDark ?? exp.logoLight}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="hidden dark:block w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </>
              ) : (
                <Icon
                  icon={exp.icon ?? "mdi:briefcase-outline"}
                  className="w-12 h-12 sm:w-14 sm:h-14 text-primary"
                />
              )}
            </div>

            <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h2 className="text-2xl font-bold text-foreground">
                  {exp.title}
                </h2>
                <span className="text-sm text-muted-foreground font-medium">
                  {exp.date}
                </span>
              </div>

              {exp.companyLink ? (
                <Link
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:underline mx-auto md:mx-0 w-fit"
                >
                  {exp.company}
                </Link>
              ) : (
                <span className="text-lg font-semibold text-primary mx-auto md:mx-0 w-fit">
                  {exp.company}
                </span>
              )}

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-1">
                {exp.remote && (
                  <span className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Remote
                  </span>
                )}
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
