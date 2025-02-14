import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen px-6 lg:px-10 py-16 flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">come say hi!</h3>
      <p className="text-center text-gray-600 max-w-2xl mb-8">
        Thanks for stopping by! If you have any questions or just want to chat, feel free to reach out to me on any of the platforms below. :)
      </p>
      <div className="flex space-x-6 mb-12">
        <a
          href="https://github.com/lilyjwhitford"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/lily-whitford/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="mailto:lilywhitford2@gmail.com"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
