import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contacts/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle='Technlogical   Exposures' title='Skills   and   Experiences'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Field Exposure Photos'/>
      <Gallery/>
      <Title subTitle='Certifications' title='Fundermental organizations'/>
      <Certifications/>
      <Title subTitle='Contact Me' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
