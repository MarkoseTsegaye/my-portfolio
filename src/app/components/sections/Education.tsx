"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { education } from "@/app/constants/experience";

const Education = () => {
  return (
    <section id="education" className="py-[6%] scroll-mt-8">
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[5%]">
        Education
      </h1>

      <div className="flex flex-col md:flex-row gap-6 w-[92%] xs:w-[85%] lg:w-3/4 mx-auto justify-center">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
            className="group flex-1 rounded-2xl border border-border bg-background/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                <Icon
                  icon="mdi:school-outline"
                  className="w-7 h-7 text-primary"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground font-medium">
                  {edu.timeline}
                </span>
                <h3 className="text-xl xs:text-2xl font-bold tracking-tight leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-primary">
                  {edu.school}
                </p>
                <p className="text-sm text-muted-foreground">{edu.detail}</p>
                <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground pt-1">
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
