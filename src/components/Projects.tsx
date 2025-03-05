import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../helpers/data.ts";
import { motion } from "framer-motion";


const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-16 pt-32 pb-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex items-end justify-end mb-8"
      >
        <span className="block w-60 h-px bg-gray-400 mr-3 mb-8"></span>
        <h2 className="text-5xl text-gray-600 font-bold relative top-4 pb-8 pr-6">
          some of my work
        </h2>
      </motion.div>

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
