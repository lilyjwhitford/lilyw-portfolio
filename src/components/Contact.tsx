import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import wavingHello from "../assets/wavingHello.gif";

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

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen px-6 lg:px-10 py-16 -mt-[48px] flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.img
          src={wavingHello}
          alt="pusheen waving hand"
          className="w-32 h-32 mb-8"
          variants={fadeUpVariants}
        />
      <motion.div
          variants={fadeUpVariants}
          className="flex items-center w-full max-w-xl"
        >
          <div className="flex-grow h-px bg-gray-400"></div>
          <h3 className="px-4 text-3xl font-bold text-gray-800">
            come say hi!
          </h3>
          <div className="flex-grow h-px bg-gray-400"></div>
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          className="text-center text-gray-600 max-w-2xl mb-8"
        >
        Thanks for stopping by! If you have any questions or just want to chat, feel free to reach out to me on any of the platforms below. :)
      </motion.p>

      <motion.div
          variants={fadeUpVariants}
          className="flex space-x-6 mb-12"
        >
        <a
          href="https://github.com/lilyjwhitford"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#ecbfb1] transition"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/lily-whitford/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#ecbfb1] transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="mailto:lilywhitford2@gmail.com"
          className="text-gray-600 hover:text-[#ecbfb1] transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
