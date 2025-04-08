import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../helpers/data.ts";
import { motion } from "framer-motion";


const Projects: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 pt-32 pb-16 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full flex items-end justify-end mb-8"
      >
        <span className="block w-12 md:w-60 h-px bg-gray-400 mr-3 lg:mr-6 mb-8"></span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 font-bold relative top-4 pb-8 pr-6">
          some of my work
        </h2>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-16 sm:gap-20">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
