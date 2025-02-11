import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../helpers/data.ts";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-16 pt-32 pb-32">
      <h2 className="text-4xl text-gray-600 font-bold text-center mb-8">some of my work</h2>
      <div className="flex flex-col items-center justify-center gap-10">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            images={project.images}
            techStack={project.techStack}
            platform={project.platform}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
