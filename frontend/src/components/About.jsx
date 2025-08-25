import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 py-16 px-6"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-10"
      >
        About <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Content */}
      <div className="max-w-5xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Short Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          <p>
            Hello! I'm <span className="font-semibold">Vandana Bhakuni</span>, a{" "}
            <span className="font-semibold">B.Tech CSE student</span> at the{" "}
            <span className="font-semibold">College of Engineering Roorkee</span> with a keen
            interest in <span className="text-blue-600">Frontend and Full Stack Development</span>.
          </p>
          <p className="mt-4">
            I enjoy building interactive, responsive web applications that focus on user
            experience and clean design. My projects range from{" "}
            <span className="italic">e-commerce websites</span> to{" "}
            <span className="italic">dictionary apps</span>, showcasing my skills in
            React, JavaScript, and modern web tools.
          </p>
        </motion.div>

        {/* Right: Education Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 border-l-4 border-blue-600"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Education
          </h3>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              <span className="font-semibold">B.Tech in Computer Science Engineering</span> –  
              College of Engineering Roorkee (2024 – 2026)  
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">CGPA: 7.3</span>
            </li>
            <li>
              <span className="font-semibold">Intermediate (ISC)</span> – Koormanchal Academy (2022)  
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">94.75%</span>
            </li>
            <li>
              <span className="font-semibold">Matriculation (ICSE)</span> – Koormanchal Academy (2020)  
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">85.80%</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
