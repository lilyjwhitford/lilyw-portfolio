import React from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0.01, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center pl-48 -mt-4 ">
      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <motion.h1 variants={fadeUpVariants} className="text-6xl font-semibold text-gray-700">Hi, I'm Lily :)</motion.h1>
        <motion.h1 variants={fadeUpVariants} className="text-7xl font-bold text-gray-800 pt-2">Full-Stack Web Developer</motion.h1>
        <motion.p variants={fadeUpVariants} className="text-xl text-gray-700 pt-2 text-left">Passionate about designing seamless user experiences.</motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
