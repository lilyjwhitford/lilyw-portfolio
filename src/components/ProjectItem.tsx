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

  // Dynamic size for container based on platform
  const containerStyles =
    platform === "mobile"
      ? "w-[300px] h-[500px] max-w-[350px]" // Smaller size for mobile
      : "w-[800px] h-[450px]"; // Default size for browser projects

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-lg p-6 overflow-hidden">
      {/* Image Section */}
      <div
        className={`relative flex-1 flex items-center justify-center ${containerStyles}`}
      >
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-auto h-full object-contain rounded-lg"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
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

      {/* Description Section */}
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
