import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Projets from './components/Projets'
import Footer from './components/Footer'




function App() {



  return (
    <div>
      <div className='p-5 md:px-[15%]'>
      <Navbar/>
      <Home/>
      
      </div>
      <About/>
      <div className='p-5 md:px-[15%]'>
        <Experiences/>
      </div>
      <div className='p-5 md:px-[15%]'>
        <Projets/>
      </div> 
      <Footer/>
    </div>
  )
}

export default App
