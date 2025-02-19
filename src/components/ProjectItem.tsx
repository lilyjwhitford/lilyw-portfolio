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

  // set container size based on app's main platform
  const containerStyles =
    platform === "mobile"
      ? "w-[150px] h-[250px] max-w-[250px]"
      : "w-[900px] h-[550px]";

  // reverse the order of images for Lost&Confused
  const opposite = name === "Lost&Confused";

  // add extra spacing for Mrkt
  const extraSpacing = name === "Mrkt" ? "lg:gap-20 pb-32" : "lg:gap-16";

  // keep text right-aligned for Mrkt and Photolabs
  const isRightAligned = name === "Mrkt" || name === "PhotoLabs";

  return (
    <div
      className={`flex flex-col p-6 lg:items-center ${extraSpacing} ${
        opposite ? "lg:flex-row-reverse" : "lg:flex-row"}
        ${isRightAligned ? "lg:text-right" : "lg:text-left"}
    `}>
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
            className="absolute w-full h-full flex items-center justify-center z-10"
          >
           <div className="p-2 border border-gray-300 shadow-md rounded-2xl">
            <motion.img
              src={images[currentIndex]}
              alt={name}
              className="w-auto h-auto object-contain rounded-xl"
            />
          </div>
          </motion.div>
        </AnimatePresence>
        <button
          className="absolute top-1/2 left-[-3rem] -translate-y-1/2 text-white bg-[#ecbfb1] rounded-full p-1 z-10 hover:bg-[#e2b0a1] transition"
          onClick={prevImage}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-[-3rem] -translate-y-1/2 text-white bg-[#ecbfb1] rounded-full p-1 z-10 hover:bg-[#e2b0a1] transition"
          onClick={nextImage}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={`flex-1`}>
        <div className="bg-gradient-to-br from-[#f9e9df] to-[#ecbfb1] p-6 rounded-3xl inline-block">
          <div className={`flex flex-col gap-4 ${opposite ? "items-start" : "items-end"}`}>
            <h3 className="text-gray-700 text-3xl font-bold">{name}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-white font-medium">{techStack}</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition mt-4"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
