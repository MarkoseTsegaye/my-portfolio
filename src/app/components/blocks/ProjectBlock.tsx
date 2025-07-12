"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const ProjectBlock = ({
  project,
}: {
  project: {
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    buttons: string[];
  };
}) => {
  return (
    <div className="flex flex-col gap-2   p-5  w-3/4 lg:w-1/3 h-[500px] border-t border-foreground/30">
      <h1 className="text-2xl font-bold text-center">{project.title}</h1>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={300}
        height={300}
        className="rounded-lg w-full p-2 object-contain hover:scale-105 transition-all duration-300 "
      />
      <div className="flex flex-col gap-5 flex-1 justify-center w-full">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex w-full mx-auto flex-row gap-2 justify-center items-center">
          {project.buttons.map((button, key) => (
            <Button
              leftImageSrc={"mdi:github"}
              leftImageAlt={project.title}
              onClick={() => {}}
              className="cursor-pointer hover:bg-foreground text-accent rounded-lg hover:text-background  py-2 px-4 transition-colors"
              key={key}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
