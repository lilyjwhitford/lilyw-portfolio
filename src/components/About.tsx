import React from "react";
import { motion } from "framer-motion";
import jsLogo from "../assets/jsLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tailwindcssLogo from "../assets/tailwindcssLogo.png";
import nodejsLogo from "../assets/nodejsLogo.png";
import tsLogo from "../assets/tsLogo.png";
import postgresqlLogo from "../assets/postgresqlLogo.png";
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
};

const About: React.FC = () => {
  return (
    <section className="min-h-screen px-6 lg:px-10 py-16 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src={itMe}
            alt="that me -_-"
            className="w-3/4 max-w-sm object-contain"
          ></img>
        </div>
        <div className="text-gray-600 max-w-lg -mt-6 justify-self-start">
        <h2 className="text-4xl font-bold py-6">About Me</h2>
          <p>
            Hello, friend! I'm Lily, I'm a web developer whose passion for
            coding began in Tumblr's prime era of 2013, where I would create
            custom themes with HTML and CSS.
          </p>
          <p className="mt-4">
            What started as a way to express myself online quickly turned into a
            drive to build and create in a meaningful way, transforming my
            internet addiction into valuable skills. Since then, I've been
            sharpening my skills in front-end development and embracing new
            technologies with each project. When I'm not coding, you can find me
            exploring new restaurants with friends, hitting the gym, or
            critiquing movies on Letterboxd!
          </p>
        </div>
      </div>
      <p className="mt-12 flex flex-col items-center">
        These are some technologies I enjoy:
      </p>
      <div className="flex flex-row items-center">
        <motion.div
          className="flex flex-row gap-8 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {Object.entries(logos).map(([key, logo]) => (
            <motion.div
              key={key}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative flex items-center justify-center h-24 w-24 p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-center mt-4 text-sm font-medium text-gray-700">
                {logo.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
