"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({
  kicker,
  title,
  align = "center",
}: {
  kicker?: string;
  title: string;
  align?: "center" | "left";
}) => {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {kicker && (
        <span className="font-mono text-xs xs:text-sm uppercase tracking-[0.25em] text-primary font-bold">
          {kicker}
        </span>
      )}
      <h2 className="text-4xl xs:text-6xl font-black tracking-tight leading-none">
        {title}
      </h2>
      <span
        className={`h-1.5 w-24 rounded-full bg-primary ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
};

export default SectionHeading;
