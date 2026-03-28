import { Guitar,  FishSymbol} from "lucide-react"
import cv from "../assets/CV_2026ERWANN.pdf"
const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#"
      className="flex items-center font-bold text-3xl md:text-xl"
      >
        

      <FishSymbol className="mr-1"/>
      Erw<span className="text-error">ann</span>
      </a>

      <ul
      className="hidden md:flex space-x-4">
        <li>
            <a href="#Home"
            className="btn btn-sm btn-ghost">
                Accueil
            </a>
        </li>
        <li>
            <a href="#About"
            className="btn btn-sm btn-ghost">
                Au-delà du code
            </a>
        </li>
         <li>
            <a href="#Experiences"
            className="btn btn-sm btn-ghost">
                Mes Expériences
            </a>
        </li>
        <li>
            <a href="#Projets"
            className="btn btn-sm btn-ghost">
                Mes Projets
            </a>
        </li>
        <li>
            <a href={cv}
            className="btn btn-sm btn-ghost">
                MON CV
            </a>
        </li>
       

      </ul>
    </div>
  )
}

export default Navbar
