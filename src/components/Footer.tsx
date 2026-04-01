import { FishSymbol, Mail } from "lucide-react"
import { SiGithub,} from '@icons-pack/react-simple-icons'
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  p-10">
  <aside>
    
    <p className="font-bold items-center justify-center">
      <FishSymbol className="ml-2 " />
      Erw<span className="text-error">ann</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
  </aside>
  <nav>
    {/**Div Pour les réseaux */}
    <div className="grid grid-flow-col gap-6 ">
      <a href="https://github.com/t3lss" target="about:blank">
        <SiGithub/>
      </a>
      <a href="mailto:erwann.savea@gmail.com">
        <Mail/>
      </a>
      <a>
        
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer
