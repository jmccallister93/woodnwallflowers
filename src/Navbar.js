import "./Navbar.scss";
import logo from "./Images/wnw_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLogo = <img src={logo} alt="No img" className="logo" />;
  const navLinks = (
    <ul className="links">
      <li className="links-item">Home</li>
      <li className="links-item">Pricing</li>
      <li className="links-item">Gallery</li>
      <li className="links-item">Contact</li>
    </ul>
  );

  return (
    <div className="navbar">
      {navLogo}
      {navLinks}
    </div>
  );
};

export default Navbar;
