import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="font-sans bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path='/projects' element = {<Projects />} />
      </Routes>
    </div>
  )
}

export default App
