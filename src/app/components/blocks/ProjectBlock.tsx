"use client";
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
    links: string[];
    buttons: string[];
  };
}) => {
  return (
    <div className="group flex flex-col gap-4 p-5 sm:p-6 w-3/4 lg:w-1/3 rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
      <div className="overflow-hidden rounded-xl border-2 border-border bg-background">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={300}
          height={300}
          className="w-full p-2 object-contain group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <h3 className="text-2xl font-extrabold tracking-tight text-center">
        {project.title}
      </h3>

      <div className="flex flex-wrap justify-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border-2 border-border bg-background px-2.5 py-0.5 text-xs font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
        {project.description}
      </p>

      <div className="flex w-full flex-col sm:flex-row gap-2 justify-center items-stretch">
        {project.buttons.map((button, key) => (
          <Button
            leftImageSrc={"mdi:github"}
            onClick={() => {
              window.open(project.links[key], "_blank");
            }}
            key={key}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectBlock;
