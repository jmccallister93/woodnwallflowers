import "./Navbar.scss"
import logo from "./Images/wnw_logo.png"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} alt="No img" className="logo" />
            <ul className="links">
                <li className="links-item">Home</li>
                <li className="links-item">Pricing</li>
                <li className="links-item">Gallery</li>
                <li className="links-item">Contact</li>
            </ul>
        </div>
     );
}
 
export default Navbar;