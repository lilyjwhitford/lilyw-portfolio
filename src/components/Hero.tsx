import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center pl-48 -mt-11 ">
      <h2 className="text-6xl font-semibold text-gray-700">Hi, I'm Lily :)</h2>
      <h1 className="text-7xl font-bold text-gray-800 pt-2">
        Full-Stack Web Developer
      </h1>
      <p className="text-xl text-gray-700 pt-2 text-left">
        Passionate about designing seamless user experiences,
      </p>
    </section>
  );
};

export default Hero;
