"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SkillsBlock = ({
  title,
  tags,
  direction,
  duration,
}: {
  title: string;
  tags: { label: string; image: string; size: number; invert?: boolean }[];
  direction: "left" | "right";
  duration: number;
}) => {
  // Use react-responsive to detect if screen is small (sm)
  // Tailwind's sm is min-width: 640px, so "isSm" means >= 640px
  const isSm = useMediaQuery({ minWidth: 640 });

  // Define image size based on screen
  const getImageSize = (tagSize: number) => {
    // If sm and up, use tag.size, else use a smaller size (e.g., 60)
    return isSm ? tagSize : Math.round(tagSize * 0.6);
  };

  const duplicatedTags = [...tags, ...tags]; // 💡 required for seamless loop

  return (
    <div className="flex flex-col justify-between rounded-xl w-full xs:w-[95%] md:w-[85%] lg:w-[75%]">
      <motion.h1
        className="text-2xl font-semibold text-center pb-4 w-3/5 sm:w-2/5 mx-auto pb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-foreground/20 after:to-transparent"
        initial={{ opacity: 0, x: direction === "left" ? -50 : 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {title}
      </motion.h1>

      <div className="relative w-full overflow-hidden  py-5  ">
        <motion.div className="flex flex-row flex-wrap justify-center mx-auto  items-center gap-5 md:gap-10 w-full max-w-max">
          {tags.map((tag, index) => (
            <motion.div
              className="flex flex-col items-center justify-center  rounded-xl "
              key={`${tag.label}-${index}`}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.08, // small stagger for a more organic effect
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex items-center justify-center flex-row border-3 border-primary/10 rounded-xl p-2">
              <Image
                src={`/${tag.image}`}
                alt={tag.label}
                width={getImageSize(tag.size)}
                height={getImageSize(tag.size)}
                style={{
                  filter: tag.invert ? "var(--invert-filter)" : "none",
                }}
                className={`hover:scale-115 transition-all object-cover  duration-300`}
              />
              </div>
              <p className="text-sm text-muted-foreground  text-center py-1 font-semibold">
                {tag.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsBlock;
