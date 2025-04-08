import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const fadeUpVariants = {
  hidden: { opacity: 0.01, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  }
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center px-6 md:px-20 lg:px-32 xl:pl-72">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full">
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-700 text-center md:text-left"
        >
          Hi! I'm{" "}
          <span className="text-[#ecbfb1]">Lily</span>
        </motion.h1>
        <motion.h1
          variants={fadeUpVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 pt-2 text-center md:text-left"
        >
          Full-Stack Web Developer
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-xl text-gray-700 pt-2 text-center md:text-left"
        >
          Passionate about designing seamless user experiences.
        </motion.p>
        <motion.p
          variants={fadeUpVariants}
          className="text-xl text-gray-700 pt-2 text-center md:text-left"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-[#ecbfb1]" />{" "}
          Vancouver, BC
        </motion.p>
        <div className="flex justify-center md:justify-start mt-4">
          <motion.a
            variants={fadeUpVariants}
            className="inline-block self-center md:self-start bg-[#ecbfb1] text-white font-semibold mt-4 px-5 py-2 rounded-full shadow-md"
            href="#about"
            whileHover={{ scale: 1, y: -3 }}
          >
            get to know me!
          </motion.a>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
