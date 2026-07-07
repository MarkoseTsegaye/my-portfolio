"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionHeading from "../ui/SectionHeading";
import { leadership } from "@/app/constants/experience";

const Leadership = () => {
  return (
    <section id="leadership" className="py-[6%] scroll-mt-8">
      <div className="flex justify-center pb-[5%]">
        <SectionHeading kicker="Beyond the code" title="Leadership" />
      </div>

      <div className="flex flex-col gap-6 w-[92%] xs:w-[85%] lg:w-3/4 mx-auto">
        {leadership.map((item, index) => (
          <motion.div
            key={`${item.organization}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="group rounded-2xl border-2 border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-background group-hover:border-primary/50 transition-colors">
                    <Icon
                      icon="mdi:account-group-outline"
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl xs:text-2xl font-extrabold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-bold text-primary">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end shrink-0 pl-18 md:pl-0">
                  <span className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-3 py-1.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {item.current && (
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    )}
                    {item.start} — {item.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-semibold">
                    <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {item.highlights.map((point, i) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
