import React from "react";
import { Code2, Layers, Cpu, Users } from "lucide-react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 px-6"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        My <span className="text-blue-600">Skills</span>
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Programming Languages */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="text-blue-600" size={26} />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Programming Languages
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Strong foundation in programming with hands-on experience in Java
            and JavaScript for building logic-driven and interactive
            applications. Proficient in markup and query languages like HTML,
            CSS, and MySQL for designing structured, responsive, and
            data-driven web solutions.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Java (Core concepts, OOP, Problem-solving)</li>
            <li>JavaScript (ES6+, DOM manipulation, API integration)</li>
            <li>HTML5 & CSS3 (Responsive layouts, Flexbox, Grid)</li>
            <li>MySQL (Database queries, schema design, normalization)</li>
          </ul>
        </div>

        {/* Frameworks & Tools */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border-l-4 border-purple-600">
          <div className="flex items-center gap-3 mb-3">
            <Layers className="text-purple-600" size={26} />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Frameworks & Tools
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Experienced with modern development frameworks and tools that
            accelerate development, testing, and collaboration.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>
              React.js – Building scalable, component-driven frontends with
              routing and state management
            </li>
            <li>
              Postman – Testing and debugging APIs during backend integration
            </li>
            <li>
              VS Code – Efficient IDE with extensions for debugging and linting
            </li>
            <li>
              Android Studio – Exposure to mobile application development
            </li>
            <li>
              Git & GitHub – Version control, collaboration, and CI/CD workflows
            </li>
          </ul>
        </div>

        {/* Other Technical Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="text-green-600" size={26} />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Other Technical Skills
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Academic and practical experience with core computer science
            subjects ensures a solid problem-solving mindset.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structures & Algorithms (DSA)</li>
            <li>Database Management Systems (DBMS)</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border-l-4 border-yellow-500">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-yellow-500" size={26} />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Soft Skills
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            I believe strong technical skills must be complemented with soft
            skills to work effectively in teams and deliver impactful solutions.
          </p>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Idea Exchange & Collaboration</li>
            <li>Leadership & Team Coordination</li>
            <li>Planning and Prioritization</li>
            <li>Problem-Solving & Attention to Detail</li>
            <li>Self-Reflection & Introspection</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
