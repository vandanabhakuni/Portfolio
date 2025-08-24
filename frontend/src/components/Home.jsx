import React from 'react'
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center 
      bg-gradient-to-r from-blue-50 via-white to-blue-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center px-6"
        >
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white"
            >
                Hi, I'm <span className="text-blue-600">Vandana Bhakuni</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
            >
                B.Tech CSE Student | Frontend & Full Stack Developer
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-6 flex gap-4"
            >
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vandana06bhakuni@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                    <Mail size={18} /> Contact Me
                </a>

                <a
                    href="https://github.com/vandanabhakuni"
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition"
                >
                    <Github size={18} /> GitHub
                </a>
            </motion.div>
        </section>
    )
}

export default Home
