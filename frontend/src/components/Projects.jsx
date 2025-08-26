import React, { useState } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Full-Stack E-Commerce Website",
    description:
      "A complete multi-page e-commerce platform with authentication, product catalog, cart management, and admin panel. This project includes secure login/register with JWT, product filtering, sorting, and search functionality. It integrates React.js for the frontend, MongoDB for data storage, and Axios for API communication. The cart system is built with Context API to handle state globally. An admin panel allows managing products and orders. The app is fully responsive with a modern UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Axios", "JWT", "Context API"],
    link: "https://github.com/vandanabhakuni/B2World-Ecommerce",
  },
  {
    title: "Spotify Clone (MERN Stack)",
    description:
      "Developed a MERN stack Spotify Clone with a responsive frontend built in React.js that closely replicates Spotify’s UI/UX. Integrated features include music playback (play, pause, next, previous, seek), playlists, and search functionality. Implemented Context API for managing player state globally. Built a secure admin panel with authentication to upload new songs, albums, and manage playlists via Node.js/Express APIs connected to MongoDB. The backend handles file uploads (Cloudinary/local storage) and JWT-based authentication. Designed a modern responsive UI with Tailwind CSS and Framer Motion for smooth animations.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Context API",
      "Tailwind CSS",
    ],
    link: "https://github.com/vandanabhakuni/Spotify-Clone",
  },
  {
    title: "Dictionary App",
    description:
      "A responsive dictionary app that fetches real-time word definitions using an API. The app allows users to search words and get instant definitions, phonetics, and examples. It includes a theme toggle (light/dark mode), smooth animations, and keyboard shortcut interactions for accessibility. Built with HTML, CSS, and JavaScript, it showcases API handling and dynamic UI rendering.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    link: "https://github.com/vandanabhakuni/Dictionary-App",
  },
  {
    title: "Amazon Clone",
    description:
      "This project mimics the look and feel of Amazon’s homepage using only HTML5 and CSS3. It features navigation bars, product sections, banners, and a responsive grid system. The project helped practice UI/UX fundamentals, flexbox, and responsive design for multiple devices.",
    tech: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://github.com/vandanabhakuni/Amazon-Clone",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My <span className="text-blue-600">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
