import "../styles/index.css"
import { useContextGlobal } from "./utils/global.context";
const Footer = () => {
  const{state}= useContextGlobal();
  return (
    <footer className={state.theme ==='light'? 'footer' : 'footer-dark'}>
        <p>Powered by DIGITAL HOUSE </p>
        
    </footer>
  )
}

export default Footer
