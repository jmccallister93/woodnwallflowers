import Socials from "./Socials";
import "./Footer.scss"
const Footer = () => {
    return ( 
        <div className="footer">
            <span className="footer__copyright">All Rights Reserved 2022</span>
            <Socials className="footer__social"/>
        </div>
        
     );
}
 
export default Footer;