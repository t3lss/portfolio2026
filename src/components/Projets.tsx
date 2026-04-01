import Title from "./Title"

import img5 from "../assets/projects/5.png"

import imoweb from "../assets/projects/immoWeb.png"
import wbld from "../assets/projects/wbld.png"
import pbts from "../assets/projects/portfolioBTS2.png"
import spacecorridor from "../assets/projects/spacecorridor.png"
import { Video } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';



const projects = [
    {
        id: 1,
        title: 'Welcome Bar-le-Duc',
        description: 'Site web fait pendant mon stage avec CLASSY CORP pour le client Welcome-Bar-le-Duc. L\'Association souhaitait un site annuaire répertoirant toutes les activités, commerces de la ville de Bar-le-Duc',
        technologies: ['Wordpress', 'Elementor'],
        demoLink: '#',
        repoLink: '#',
        image: wbld,
    },
    {
        id: 2,
        title: 'Appli web ImmoWeb',
        description: 'Projet BTS. Application en MVC ayant pour but d\'imiter l\'application web d\'une agence web ImmoWeb, où l\'utilisateur a la possibilité de reserver des logements.',
        technologies: ['PHP', 'MVC', 'BDD', 'Bootstrap'],
        demoLink: '#',
        repoLink: '#',
        image: imoweb,
    },
    
    {
        id: 3,
        title: 'Spacecoridor',
        description: 'Jeu en C développé dans le cadre d\'un projet de synthèse en L2 Informatique. Le jeu reprends un game play simple de vaisseau spatiial à la XENON 2000.',
        technologies: ['C'],
        demoLink: '#',
        repoLink: '#',
        image: spacecorridor,
    },
    {
        id: 4,
        title: 'Portfolio ',
        description: 'Portoflio réalisé en BTS, présenté lors d\'un projet.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        demoLink: '#',
        repoLink: '#',
        image: pbts,
    },
    {
        id: 5,
        title: 'µzik',
        description: 'Site de prise en main html en L1 informatique. Site imitant les plateformes de musiques, avec des formulaire de connexion et d\'incription',
        technologies: ['HTML', 'CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
    
];
const Projets = () => {
  return (
    <div className="mt-10" id="Projets">
      <Title title="Mes projets"/>
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((projet) =>(
            <div key={projet.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                <img 
                    src={projet.image} 
                    alt={projet.title}
                    className="w-full rounded-xl h-56 object-cover" />
                    <div>
                        <h1 className="my-2 font-bold ">
                            {projet.title}
                        </h1>
                        <p className="text-sm">
                            {projet.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                        {projet.technologies.map((technos) =>(
                            <span className="badge badge-accent badge-sm">
                                {technos}
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <a href={projet.demoLink} className="btn btn-accent w-2/3">
                            Démo <Video className="w-4"/>
                        </a>

                        <a className="btn btn-error w-1/3 ml-2 " href={projet.repoLink}>
                            <SiGithub className="w-4" />
                        </a>
                    </div>
                    
            </div>
        ))}
      </div>
    </div>
  )
}

export default Projets
