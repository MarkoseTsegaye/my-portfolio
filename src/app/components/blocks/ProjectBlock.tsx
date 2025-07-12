"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const ProjectBlock = ({
  imageUrl,
  title,
  description,
  tags,
  link,
}: {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}) => {
  return (
    <div className="flex flex-col gap-2  rounded-lg p-5  w-full sm:w-2/3 h-[500px]">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg w-full h-2/3 object-contain"
      />
      <div className="flex flex-col gap-5 flex-1 ">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-col xl:flex-row gap-2 justify-center">
          <Button
            leftImageSrc={"mdi:github"}
            leftImageAlt={title}
            onClick={() => {}}
            className="cursor-pointer hover:bg-accent-foreground text-accent-foreground rounded-lg hover:text-accent-foreground/80 py-2 px-4 transition-colors"
          >
            GitHub
          </Button>
          <Button
            leftImageSrc={"mdi:link"}
            leftImageAlt={title}
            onClick={() => {}}
            className="cursor-pointer hover:bg-accent-foreground text-accent-foreground rounded-lg hover:text-accent-foreground/80 py-2 px-4 transition-colors"
          >
            Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
