import React from "react";
import { Code2, Wrench, Users } from "lucide-react";

const skills = {
  technical: [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "React.js",
    "Postman",
    "VS Code",
    "Android Studio",
    "Git & GitHub",
    "OOP",
    "DSA",
    "DBMS",
  ],
  soft: [
    "Idea Exchange",
    "Collaboration",
    "Leadership",
    "Planning & Prioritization",
    "Problem-Solving",
    "Attention to Detail",
    "Introspection",
  ],
};

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

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Technical Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.technical.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-green-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-green-100 dark:bg-gray-700 text-green-600 dark:text-gray-300 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
