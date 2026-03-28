import Title from "./Title"
import img from "../assets/cost.jpg"
import { Football } from "@phosphor-icons/react";



import { CalendarSync, Guitar, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
      id: 1,
      title: "Joueur de rugby de haut niveau jeunes",
      description: "J\'ai pratiqué le rugby à haut niveau jusqu\'en espoir, en passant par des clubs comme le Castres Olympique ou l\'ASM (Clermont-Ferrand).",
      icon: <Football size={20} className="text-accent scale-150"/> // Parfait pour ton passé U18 !
  },
  {
      id: 2,
      title: "Passioné de musiques",
      description: "Passion considérable pour la musique en tous genre. Je joue de la guitare, bass, piano, batterie, je chante... J'aime beaucoup produire de la musique, je passe la plupart de mon temps libre en studio.",
      icon: <Guitar className="text-accent scale-150" />,
  },
  {
      id: 3,
      title: "Passionné par l'UI/UX",
      description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
      icon: <Paintbrush className="text-accent scale-150" />,
  },
];
const About = () => {
  return (
    <div className="bg-base-300 p-10 md:mb-32" id="About">
      <Title title="Au-delà du code"/>
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
        <img src={img} alt="" className="w-96 object-cover rounded-xl" />
        
        </div>
        <div className="md:ml-4 space-y-4">
          {
            aboutSections.map((Section)=>(
              <div key={Section.id} className="flex flex-col md:flex-row items-center bg-base-100 rounded-xl p-5 md:w-96 shadow-xl">
                <div className="mb-2 md:mb-0">
                  {Section.icon}
                </div>
                <div className="md:ml-4 text-center md:text-left">
                  <h2 className="text-xl font-bold mb-1">
                  {Section.title}
                  </h2>
                  <p>
                    {Section.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About
