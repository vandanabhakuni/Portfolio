import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-Commerce Website",
    shortDesc:
      "A complete multi-page e-commerce platform with authentication, product catalog, cart management, and admin panel.",
    longDesc:
      "This project includes secure login/register with JWT, product filtering, sorting, and search functionality. It integrates React.js for the frontend, MongoDB for data storage, and Axios for API communication. The cart system is built with Context API to handle state globally. An admin panel allows managing products and orders. The app is fully responsive with a modern UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Axios", "JWT", "Context API"],
    link: "https://github.com/vandanabhakuni/B2World-Ecommerce",
  },
  {
    title: "Dictionary App",
    shortDesc:
      "A responsive dictionary app that fetches real-time word definitions using an API.",
    longDesc:
      "The app allows users to search words and get instant definitions, phonetics, and examples. It includes a theme toggle (light/dark mode), smooth animations, and keyboard shortcut interactions for accessibility. Built with HTML, CSS, and JavaScript, it showcases API handling and dynamic UI rendering.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    link: "https://github.com/vandanabhakuni/Dictionary-App",
  },
  {
    title: "Amazon Clone",
    shortDesc:
      "A front-end clone of Amazon’s homepage to practice responsive layouts.",
    longDesc:
      "This project mimics the look and feel of Amazon’s homepage using only HTML5 and CSS3. It features navigation bars, product sections, banners, and a responsive grid system. The project helped practice UI/UX fundamentals, flexbox, and responsive design for multiple devices.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://github.com/vandanabhakuni/Amazon-Clone",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

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
                {expanded === index ? project.longDesc : project.shortDesc}
              </p>

              {/* Tech badges */}
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

              {/* Toggle Button */}
              <button
                onClick={() => toggleExpand(index)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
              >
                {expanded === index ? "Show Less" : "Read More"}
              </button>
            </div>

            {/* GitHub Link */}
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
