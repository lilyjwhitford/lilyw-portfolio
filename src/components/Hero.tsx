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

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center pl-48 ">
      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <motion.h1
          variants={fadeUpVariants}
          className="text-6xl font-semibold text-gray-700"
        >
          Hi! I'm{" "}
          <span className="text-[#ecbfb1]">Lily</span>
        </motion.h1>
        <motion.h1
          variants={fadeUpVariants}
          className="text-7xl font-bold text-gray-800 pt-2"
        >
          Full-Stack Web Developer
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-xl text-gray-700 pt-2 text-left"
        >
          Passionate about designing seamless user experiences.
        </motion.p>
        <motion.p
          variants={fadeUpVariants}
          className="text-xl text-gray-700 pt-2 text-left"
        >
          <FontAwesomeIcon icon={faLocationDot} className="text-[#ecbfb1]" />{" "}
          Vancouver, BC
        </motion.p>
      </motion.div>

      <motion.a
        href="#about"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2, y: -3 }}
        className="mt-8 inline-block bg-[#ecbfb1] text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300"
      >
        get to know me!
      </motion.a>
    </section>
  );
};

export default Hero;
