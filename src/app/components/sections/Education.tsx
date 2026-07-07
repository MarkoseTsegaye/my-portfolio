"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeading from "../ui/SectionHeading";
import { education } from "@/app/constants/experience";

const Education = () => {
  return (
    <section id="education" className="py-[6%] scroll-mt-8">
      <div className="flex justify-center pb-[5%]">
        <SectionHeading kicker="Academics" title="Education" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-[92%] xs:w-[85%] lg:w-3/4 mx-auto justify-center">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
            className="group flex-1 rounded-2xl border-2 border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-background group-hover:border-primary/50 transition-colors">
                <Icon
                  icon="mdi:school-outline"
                  className="w-7 h-7 text-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
                  {edu.timeline}
                </span>
                <h3 className="text-xl xs:text-2xl font-extrabold tracking-tight leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-base font-bold text-primary">{edu.school}</p>
                <p className="text-sm text-muted-foreground font-semibold">
                  {edu.detail}
                </p>
                <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-semibold pt-1">
                  <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                  {edu.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
