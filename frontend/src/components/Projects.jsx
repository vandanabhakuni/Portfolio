import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-Commerce Website",
    description:
      "A multi-page e-commerce web app with authentication, product catalog, cart management, checkout flow, and admin panel. Built with React.js, Context API, MongoDB, and Axios.",
    tech: ["React.js", "Node.js", "MongoDB", "Axios"],
    link: "https://github.com/vandanabhakuni/B2World-Ecommerce", // replace with actual repo
  },
  {
    title: "Dictionary App",
    description:
      "A responsive web app fetching real-time definitions via API. Features include theme toggling, animations, and keyboard interactions.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "https://github.com/vandanabhakuni/Dictionary-App", // replace with actual repo
  },
  {
    title: "Amazon Clone",
    description:
      "A fully responsive homepage UI inspired by Amazon. Built with HTML5 & CSS3 to practice layout, design, and responsiveness.",
    tech: ["HTML5", "CSS3"],
    link: "https://github.com/vandanabhakuni/Amazon-Clone", // replace with actual repo
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 px-6"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        My <span className="text-blue-600">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mt-auto"
            >
              <Github size={18} /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
