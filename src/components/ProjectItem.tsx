import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItemProps {
  images: string[];
  name: string;
  description: string;
  techStack: string;
  platform: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  images = [],
  name,
  description,
  techStack,
  platform,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const containerStyles =
    platform === "mobile"
      ? "w-[300px] h-[500px] max-w-[350px]"
      : "w-[800px] h-[450px]";

  const opposite = name === "Lost&Confused";

  return (
    <div
      className={`flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 overflow-hidden ${
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
            <img
              src={images[currentIndex]}
              alt={name}
              className="w-auto h-full object-contain rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
          onClick={prevImage}
        >
          {"<"}
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
          onClick={nextImage}
        >
          {">"}
        </button>
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-800 font-medium">
          <span className="font-bold">Tech Stack:</span> {techStack}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
