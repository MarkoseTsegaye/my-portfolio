"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { leadership } from "@/app/constants/experience";

const Leadership = () => {
  return (
    <section id="leadership" className="py-[6%] scroll-mt-8">
      <h1 className="text-4xl xs:text-6xl font-bold text-center pb-[5%]">
        Leadership
      </h1>

      <div className="flex flex-col gap-6 w-[92%] xs:w-[85%] lg:w-3/4 mx-auto">
        {leadership.map((item, index) => (
          <motion.div
            key={`${item.organization}-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="group rounded-2xl border border-border bg-background/40 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                    <Icon
                      icon="mdi:account-group-outline"
                      className="w-7 h-7 text-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl xs:text-2xl font-bold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-primary">
                      {item.organization}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end shrink-0 pl-18 md:pl-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {item.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    )}
                    {item.start} — {item.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Icon icon="mdi:map-marker-outline" className="w-4 h-4" />
                    {item.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Icon
                      icon="mdi:chevron-right"
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
