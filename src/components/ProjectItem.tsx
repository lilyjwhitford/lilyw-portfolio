import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectItemProps {
  images: string[];
  name: string;
  description: string;
  techStack: string;
  platform: string;
  github: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  images = [],
  name,
  description,
  techStack,
  platform,
  github,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const containerStyles =
    platform === "mobile"
      ? "w-[300px] h-[500px] max-w-[350px]"
      : "w-[900px] h-[550px]";

  const opposite = name === "Lost&Confused";

  const extraSpacing = name === "Mrkt" ? "lg:gap-32" : "lg:gap-6";

  return (
    <div
      className={`flex flex-col p-6 lg:items-center ${extraSpacing} ${
        opposite ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`relative flex-1 flex items-center justify-center ${containerStyles}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={images[currentIndex]}
              alt={name}
              className="w-auto h-auto object-contain rounded-xl"
            />
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute top-1/2 left-[-3rem] -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 z-10 hover:bg-gray-700 transition"
          onClick={prevImage}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-[-3rem] -translate-y-1/2 bg-gray-800 text-white rounded-full p-1 z-10 hover:bg-gray-700 transition"
          onClick={nextImage}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        className={`flex-1 flex flex-col gap-4 ${
          opposite ? "items-start" : "items-end"
        }`}
      >
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-800 font-medium">
          <span className="font-bold">Tech Stack:</span> {techStack}
        </p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black transition mt-4"
        >
        <FontAwesomeIcon icon={faGithub} className="text-3xl"/>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
