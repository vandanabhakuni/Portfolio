import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Vandana</h1>
                <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
