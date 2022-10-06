import "./Navbar.scss";
import logo from "./Images/wnw_logo.png";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Navbar = () => {
  const navLogo = <img src={logo} alt="No img" className="logo" />;
  const navLinks = (
    <div className="links__wrapper">
      <Socials />
      <ul className="links">
        <Link to="/" style={{ textDecoration: "none", color: '#3E7C17' }}>
          <li className="links-item">Home</li>
        </Link>
        <Link to="/pricing" style={{ textDecoration: "none", color: '#3E7C17' }}>
          <li className="links-item">Pricing</li>
        </Link>
        <Link to="/gallery" style={{ textDecoration: "none", color: '#3E7C17' }}>
          <li className="links-item">Gallery</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: '#3E7C17' }}>
          <li className="links-item">Contact</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <div className="navbar">
      {navLogo}
      {navLinks}
    </div>
  );
};

export default Navbar;
