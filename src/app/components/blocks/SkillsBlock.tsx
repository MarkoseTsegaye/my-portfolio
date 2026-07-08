"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillsBlock = ({
  title,
  tags,
  index = 0,
}: {
  title: string;
  tags: { label: string; image: string; size: number; invert?: boolean }[];
  index?: number;
}) => {
  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl border border-border bg-background/40 backdrop-blur-sm p-4 sm:p-5 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
    >
      <h2 className="text-base sm:text-lg font-semibold text-center pb-4 mb-3 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-foreground/25 after:to-transparent">
        {title}
      </h2>

      <div className="flex flex-row flex-wrap justify-center items-start gap-3 sm:gap-4">
        {tags.map((tag, i) => (
          <motion.div
            className="flex flex-col items-center justify-start gap-1.5 w-[60px] sm:w-[68px]"
            key={`${tag.label}-${i}`}
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: i * 0.12,
            }}
            whileHover={{ scale: 1.12 }}
          >
            <div className="flex items-center justify-center rounded-xl border border-primary/10 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 w-[48px] h-[48px] sm:w-[54px] sm:h-[54px]">
              <Image
                src={`/${tag.image}`}
                alt={tag.label}
                width={40}
                height={40}
                style={{
                  filter: tag.invert ? "var(--invert-filter)" : "none",
                }}
                className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] object-contain transition-transform duration-300"
              />
            </div>
            <p className="text-[11px] leading-tight text-muted-foreground text-center font-medium">
              {tag.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsBlock;
