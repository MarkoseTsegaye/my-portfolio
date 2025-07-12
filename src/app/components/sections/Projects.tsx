import { imageUrls } from "@/app/constants/skills";
import React from "react";
import ProjectBlock from "../blocks/ProjectBlock";

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center pb-10">Projects</h1>
      <div className="flex flex-col xl:flex-row w-full  items-center gap-8">
        <ProjectBlock
          imageUrl={imageUrls.forkcast}
          title="Forkcast"
          description="Forkcast is a web application that allows users to create and share their own playlists."
          tags={["React", "JavaScript", "Tailwind CSS", "TypeScript"]}
          link="/forkcast.png"
        />
        <ProjectBlock
          imageUrl={imageUrls.algoMinds}
          title="AlgoMinds"
          description="AlgoMinds is a web application that allows users to create and share their own playlists."
          tags={["React", "JavaScript", "Tailwind CSS", "TypeScript"]}
          link="/forkcast.png"
        />
        <ProjectBlock
          imageUrl={imageUrls.debateGuard}
          title="DebateGuard"
          description="DebateGuard is a web application that allows users to create and share their own playlists."
          tags={["React", "JavaScript", "Tailwind CSS", "TypeScript"]}
          link="/forkcast.png"
        />
      </div>
    </div>
  );
};

export default Projects;
