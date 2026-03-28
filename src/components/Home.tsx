import {FileUser, Mail } from "lucide-react"

import img from '../assets/profil2.jpg'
import cv from "../assets/CV_2026ERWANN.pdf"
const Home = () => {
  return (
    /* Première div qui contient toute la partie principale*/
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      
      {/*Div qui contient toute la première partie du HOME page principale */}
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour, <br /> je suis <span className="text-error ">Erwann</span></h1>
        <p className="my-4 text-medium text-center md:text-left">
          Je suis un étudiant en Informatique Bac+2 <br />
          
        </p>

        <a href="mailto:erwann.savea@gmail.com" className="btn btn-error md:w-fit">
        <Mail className="w-5 h-5 text-center"/>
        Contactez moi 
        </a>
        {/** Hidden qui fait en sorte qu'en mode navigateur le bouton mail soit invisible (mais present dans la navbar) */}
        <a href={cv} className="btn btn-error md:w-fit mt-2 md:hidden" target="_blank" rel="noopener noreferrer">
        <FileUser className="w-5 h-5 text-center"/>
        Mon CV
        </a>
      </div >
        

      <div className="md:ml-60">
      <img src={img} alt="" className="w-96 h-96 object-cover
      border-8 border-accent" 
      style={{
        borderRadius : "49% 66% 60% 28% / 65% 0% 100% 35% "
      }}/>
      </div>
    </div>
  )
}

export default Home
