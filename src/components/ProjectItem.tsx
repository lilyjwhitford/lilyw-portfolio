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
      ? "w-[150px] h-[250px] sm:w-[180px] sm:h-[280px]"
      : "w-full sm:w-[500px] lg:w-[900px] h-auto";

  // reverse the order of images for Lost&Confused project
  const isOppositeDesktop = name === "Lost&Confused";

  // add extra spacing for Mrkt project
  const extraSpacing = name === "Mrkt" ? "lg:gap-20 pb-32" : "lg:gap-16";

  // keep text right-aligned for Mrkt and Photolabs projects
  const isRightAligned = name === "Mrkt" || name === "PhotoLabs";

  const isMrkt = name === "Mrkt";

  return (
    <motion.div
      className={`flex flex-col lg:items-center text-center gap-10 sm:gap-16 p-6 sm:p-12 
        ${extraSpacing} ${isOppositeDesktop ? "md:flex-row-reverse" : "md:flex-row"} 
        ${isRightAligned ? "lg:text-right" : "lg:text-left"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* image container */}
      <div className={`relative flex-1 flex items-center justify-center py-24 sm:py-1 ${containerStyles}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.04 }}
            className="absolute w-full h-full flex items-center justify-center z-10"
          >
            <div className="p-2 border border-gray-300 shadow-md rounded-2xl">
              <motion.img
                src={images[currentIndex]}
                alt={name}
                className="w-full h-auto max-h-[400px] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* navigation buttons (position inside image on mobile) */}
        <button
          className={`absolute top-1/2 left-2 
            sm:left-[-2rem]
            ${isMrkt ? "lg:left-[6rem]" : "lg:left-[-2.5rem]"} 
            -translate-y-1/2 text-white bg-[#ecbfb1] rounded-full p-1 sm:p-2 z-10 
            hover:bg-[#e2b0a1] transition shadow-md`}
          onClick={prevImage}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className={`absolute top-1/2 right-2 
            sm:right-[-2rem] 
            ${isMrkt ? "lg:right-[6rem]" : "lg:right-[-2.5rem]"} 
            -translate-y-1/2 text-white bg-[#ecbfb1] rounded-full p-1 sm:p-2 z-10 
            hover:bg-[#e2b0a1] transition shadow-md`}
          onClick={nextImage}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* project info */}
      <div className="flex-1 mt-6 sm:mt-0">
        <div className="bg-[#ecbfb1] p-4 sm:p-6 rounded-3xl shadow-lg inline-block">
          <div className={`flex flex-col gap-3 sm:gap-4 ${isOppositeDesktop ? "items-start" : "items-end"}`}>
            <h3 className="text-gray-700 text-2xl sm:text-3xl font-bold">{name}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            <p className="text-white font-medium text-sm sm:text-base">{techStack}</p>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition mt-2 sm:mt-4"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
