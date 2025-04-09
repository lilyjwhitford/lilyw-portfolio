import React from "react";
import { motion } from "framer-motion";
import itMe from "../assets/itMe.jpeg";
import { logos } from "../helpers/data";

// fade up animation
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// hover animations
const blockVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 5, y: 5 }
};
const imageVariants = {
  rest: { x: 0, y: 0, filter: "grayscale(100%)" },
  hover: { x: -6, y: -6, filter: "grayscale(0%)" },
};

const About: React.FC = () => {
  return (
    <section className="min-h-screen px-6 lg:px-10 py-24 flex flex-col items-center justify-center">
      {/* about content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center  mb-16">
          {/* img column */}
          <div className="flex justify-center">
            <motion.div 
              className="relative inline-block"
              whileHover="hover"
              initial="rest"
              animate="rest"
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="absolute top-3 left-3 right-[-10px] bottom-[-10px] bg-[#ecbfb1] rounded-3xl z-[-1]"
                variants={blockVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
              ></motion.div>
              <motion.img
                src={itMe}
                alt="picture of me with toad lol"
                className="w-[14rem] md:w-[18rem] h-auto object-contain rounded-3xl shadow-lg"
                variants={imageVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>
          </div>
          {/* text column */}
          <div className="text-gray-600 max-w-lg overflow-hidden flex items-start flex-col gap-6">
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center pl-6 md:pl-12">
                <span className="block w-20 md:w-60 h-px mt-10 bg-gray-400 mr-3"></span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-8 pt-16">about me</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <div className="flex flex-col gap-2 text-center md:text-right">
                <p>
                  Hello, friend! I'm Lily, a{" "}
                  <span className="text-[#e2a48f]">web developer</span> whose passion for coding began in Tumblr's prime era of 2013,
                  where I would create custom themes with{" "}
                  <span className="text-[#e2a48f]">HTML</span> and{" "}
                  <span className="text-[#e2a48f]">CSS</span>.
                </p>
                <p className="mt-4">
                  What started as a way to express myself online quickly turned into a drive to build
                  and create in a meaningful way, transforming my internet addiction into an awesome career.
                  Since then, I've been sharpening my skills in development and embracing new technologies with each project.
                  When I'm not coding, you can find me exploring different restaurants and breweries, hitting the gym, or reading!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* tech section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUpVariants}
      >
        <div className="mt-12 flex items-center">
          <div className="w-12 sm:w-20 md:w-60 h-px bg-gray-400"></div>
          <p className="px-4 text-center text-gray-600 text-sm sm:text-base md:text-xl break-words">
            these are some technologies I enjoy:
          </p>
          <div className="w-12 sm:w-20 md:w-60 h-px bg-gray-400"></div>
        </div>
        <div className="overflow-hidden w-full max-w-full">
          <div className="px-4 sm:px-6 md:px-10 xl:px-20">
            <div className="mt-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
              {Object.entries(logos).map(([key, logo]) => (
                <motion.div
                  key={key}
                  className="flex items-center border border-gray-300 rounded-md py-2 px-2 w-full max-w-[180px] mx-auto overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 md:w-12 h-10 md:h-12 mr-2">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-full object-contain filter grayscale brightness-75"
                    />
                  </div>
                  <p className="text-gray-700 text-xs md:text-sm font-medium break-words text-center">{logo.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};


export default About;
