import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Footer from './sections/Footer.jsx'
import Experiences from "./sections/Experiences.jsx";

// import Contact from './sections/Contact.jsx'
function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects />
      <Experiences />
      {/* <Contact/> */}
      <Footer/>
      {/* <section className='h-screen' ></section> */}
    </div>
  )
}

export default App