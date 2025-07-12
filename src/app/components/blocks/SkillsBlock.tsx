"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillsBlock = ({
  title,
  tags,
  direction,
  duration,
}: {
  title: string;
  tags: { label: string; image: string }[];
  direction: "left" | "right";
  duration: number;
}) => {
  const duplicatedTags = [...tags, ...tags]; // 💡 required for seamless loop

  return (
    <div className="flex flex-col justify-between rounded-xl pb-4 w-full xs:w-[95%] md:w-[85%] lg:w-[75%]">
      <h1 className="text-2xl font-bold text-center pb-4">{title}</h1>

      <div className="relative w-full overflow-hidden border-y border-foreground/60 py-4">
        <motion.div
          className="flex gap-40 w-max hidden md:flex"
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTags.map((tag, index) => (
            <div
              className="flex items-center justify-center  bg-black/50 dark:bg-accent/40 hover:bg-black/70 dark:hover:bg-accent/60 rounded-xl p-2"
              key={`${tag.label}-${index}`}
            >
              <Image
                className="hover:scale-110 transition-all object-cover  duration-300"
                src={`/${tag.image}`}
                alt={tag.label}
                width={110}
                height={110}
                objectFit="cover"
              />
            </div>
          ))}
        </motion.div>
        <div className="flex flex-wrap justify-center mx-auto items-center gap-4 md:hidden w-full max-w-max">
          {tags.map((tag, index) => (
            <div
              className="flex items-center justify-center  bg-black/50 dark:bg-accent/40 hover:bg-black/70 dark:hover:bg-accent/60 rounded-xl p-2"
              key={`${tag.label}-${index}`}
            >
              <Image
                src={`/${tag.image}`}
                alt={tag.label}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
