import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import jsLogo from "../assets/jsLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import nodejsLogo from "../assets/nodejsLogo.png";
import tsLogo from "../assets/tsLogo.png";
import postgresqlLogo from "../assets/postgresqlLogo.png";
import figmaLogo from "../assets/figmaLogo.png";
import gitLogo from "../assets/gitLogo.png";
import itMe from "../assets/itMe.png";

type Logo = {
  src: string;
  alt: string;
  title: string;
};

const logos: Record<string, Logo> = {
  javascript: {
    src: jsLogo,
    alt: "Javascript",
    title: "Javascript",
  },
  react: {
    src: reactLogo,
    alt: "React",
    title: "React",
  },
  tailwindcss: {
    src: tailwindcssLogo,
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  nodejs: {
    src: nodejsLogo,
    alt: "Node.js",
    title: "Node.js",
  },
  typescript: {
    src: tsLogo,
    alt: "Typescript",
    title: "Typescript",
  },
  postgresql: {
    src: postgresqlLogo,
    alt: "PostgreSQL",
    title: "PostgreSQL",
  },
  figma: {
    src: figmaLogo,
    alt: "Figma",
    title: "Figma",
  },
  git: {
    src: gitLogo,
    alt: "Git",
    title: "Git",
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const About: React.FC = () => {
  return (
    <section className="min-h-screen px-6 lg:px-10 py-16 flex flex-col items-center justify-center">
      {/* about content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center mb-16">
          <div className="flex justify-center">
            <motion.img
              src={itMe}
              alt="picture of me holding flowers"
              className="w-2/3 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="text-gray-600 max-w-lg flex items-end flex-col gap-6">
            <div className="flex items-center">
              <span className="block w-60 h-px mt-10 bg-gray-400 mr-3"></span>
              <h2 className="text-5xl font-bold pb-8 pt-16">about me</h2>
              <FontAwesomeIcon icon={faStar} className="text-2xl mt-8 ml-2"/>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <p>
                Hello, friend! I'm Lily, a{" "}
                <span className="text-[#e2a48f]">web developer</span> whose passion for coding began in Tumblr's prime era of 2013,
                where I would create custom themes with{" "}
                <span className="text-[#e2a48f]">HTML</span> and{" "}
                <span className="text-[#e2a48f]">CSS</span>.
              </p>
              <p className="mt-4">
                What started as a way to express myself online quickly turned into a drive to build
                and create in a meaningful way, transforming my internet addiction into an awesome career. Since then, I've been sharpening my skills in front-end development and
                embracing new technologies with each project. When I'm not coding, you can find me
                exploring new restaurants, hitting the gym, or critiquing movies on
                Letterboxd!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* technologies section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="mt-12 flex items-center">
          <div className="block w-60 h-px bg-gray-400"></div>
          <p className="mx-4 font-bold text-gray-600 text-xl whitespace-nowrap">
            these are some technologies I enjoy:
          </p>
          <div className="block w-60 h-px bg-gray-400"></div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-4">
          {Object.entries(logos).map(([key, logo]) => (
            <motion.div
              key={key}
              className="flex items-center border border-gray-300 rounded-md py-1 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "#fcdad0" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 mr-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain filter grayscale brightness-75"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">{logo.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
