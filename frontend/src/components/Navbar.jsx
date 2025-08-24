import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Vandana</h1>
                <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
                    <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
                    <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
