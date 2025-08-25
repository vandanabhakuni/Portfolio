import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  return (
    <div className='font-sans'>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
