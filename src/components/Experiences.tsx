import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
//import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
//import imgPRISMA from "../assets/techno/prisma.webp";
import imgPython from "../assets/techno/Python-logo-notext.svg"
import imgC from "../assets/techno/C_Programming_Language.svg"
import imgJava from "../assets/techno/java.svg"
import imgSQL from "../assets/techno/MySQL.png"
import imgGit from "../assets/techno/git.png"
import anssi from "../assets/companies/ANSSI_Logo.svg"


import ul from "../assets/companies/Logo_UL.png"
import bld from "../assets/companies/bld.jpg"
import ab from "../assets/companies/ambroiseBrugiere.svg"



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Python", image: imgPython },
    { id: 9, name: "C", image: imgC },
    { id: 10, name: "Java", image: imgJava},
    { id: 11, name: "MySql", image: imgSQL},
    { id: 12, name: "Git", image: imgGit},
];
const parcours = [
    {
        id: 1,
        role: "Licence informatique",
        company: "Université de Lorraine",
        period: "2024 - 2026",
        description: [
            "Apprentissage Général de l'Informatique.",
        ],
        image: ul,
    },
    {
        id: 2,
        role: "Certification MOOC ANSSI",
        company: "ANSSI",
        period: "2022",
        description: [
            "Score de 98%",
            
        ],
        image: anssi,
    },
    {
        id: 3,
        role: "BTS SIO",
        company: "Lycée Raymond POINCARÉ (Bar-le-Duc)",
        period: "2022 - 2024",
        description: [
            "Spécialisation SLAM",
            "",
        ],
        image: bld,
    },
    {
        id: 3,
        role: "BAC Général",
        company: "Lycée Ambroise Brugière (Clermont-Ferand)",
        period: "2020 - 2022",
        description: [
            "Mathématiques",
            "Physique-Chimie",
            "HGGSP",
        ],
        image: ab,
    },
];

const Experiences = () => {
  return (
    <div id="Experiences">
      <Title title="parcours & skills"/>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        {/* Div qui contient les lang. que je maitrise LES COMPETENCES*/}
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
            {skills.map((skill)=>(
                <div key={skill.id} className="flex justify-center items-center flex-col">
                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                        <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                    </div>
                    <span className="mt-2 text-sm">{skill.name}</span>
                </div>
            ))}
            
        </div>
        
        {/**Cette div ci conteint les exp */}
        <div className="md:ml-4 flex flex-col space-y-4">
            
                {parcours.map((exp)=>(
                    <div key={exp.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                        
                        <div className="flex items-center">
                            <img src={exp.image} alt={exp.company} className="object-cover rounded-xl w-15 h-15"/>
                            <div className="ml-4">
                                <h1 className="text-xl text-accent font-bold">
                                    {exp.role},{exp.company}
                                </h1>
                                <span className="text-sm">
                                    {exp.period}
                                </span>
                            </div>
                        </div>

                        <ul className="list-disc ml-16 mt-2">
                            {exp.description.map((desc, index)=> (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                    
                ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
