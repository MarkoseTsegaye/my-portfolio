"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "@/app/constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-[6%] scroll-mt-8">
      <div className="flex justify-center pb-[5%]">
        <SectionHeading kicker="Where I've worked" title="Experience" />
      </div>

      <div className="flex flex-col gap-10 w-[92%] xs:w-[85%] lg:w-3/4 mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="group relative rounded-2xl border-2 border-border bg-card p-6 sm:p-9 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          >
            {/* thick accent bar down the left edge */}
            <span className="absolute left-0 top-6 bottom-6 w-1.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />

            <div className="flex flex-col gap-6 pl-4 sm:pl-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl xs:text-3xl font-extrabold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg xs:text-xl font-bold text-primary">
                    {exp.company}
                    {exp.team && (
                      <span className="text-muted-foreground font-medium">
                        {" · "}
                        {exp.team}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:items-end shrink-0">
                  <span className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-3 py-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Icon icon="mdi:calendar-blank" className="w-4 h-4" />
                    {exp.start} — {exp.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-semibold">
                    <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Icon
                      icon="mdi:chevron-right-circle"
                      className="w-5 h-5 mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-base text-foreground/90 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border-2 border-border bg-background px-3 py-1 text-sm font-bold"
                  >
                    {tech}
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
