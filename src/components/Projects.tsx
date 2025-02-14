import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../helpers/data.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-16 pt-32 pb-3">
      <div className="w-full flex items-end justify-end mb-8">
        <span className="block w-60 h-px bg-gray-400 mr-3 mb-8"></span>
        <h2 className="text-5xl text-gray-600 font-bold relative top-4 pb-8">
          some of my work
          <FontAwesomeIcon icon={faStar} className="text-2xl px-3 pb-2" />
        </h2>
      </div>

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
