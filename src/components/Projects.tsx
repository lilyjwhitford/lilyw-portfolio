import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../helpers/data.ts";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            images={project.images}
            techStack={project.techStack}
            platform={project.platform}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
