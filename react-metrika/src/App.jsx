import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

const App = () => {
  return (
    <div className='container'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </div>
  )
}

export default App
