import { Link } from "react-router-dom";

const GalleryLinks = () => {
    return ( 
    <>
    <ul className="header__ul" id="header__container">
      <Link
        to={"/gallery"}
        style={{ textDecoration: "none", color: "#3E7C17" }}
      >
        <li className="header__li" id="all">
          All
        </li>
      </Link>

      <Link
        to={"/gallery/rentals"}
        style={{ textDecoration: "none", color: "#3E7C17" }}
      >
        {" "}
        <li className="header__li" id="rentals">
          Rentals
        </li>
      </Link>

      <Link
        to={"/gallery/balloons"}
        style={{ textDecoration: "none", color: "#3E7C17" }}
      >
        <li className="header__li" id="balloons">
          Balloon Garlands
        </li>
      </Link>

      <Link
        to={"/gallery/circles"}
        style={{ textDecoration: "none", color: "#3E7C17" }}
      >
        <li className="header__li" id="circles">
          Circle Arch
        </li>
      </Link>

      <Link
        to={"/gallery/signs"}
        style={{ textDecoration: "none", color: "#3E7C17" }}
      >
        <li className="header__li" id="signs">
          Sign Options
        </li>
      </Link>
    </ul>
    </>
     );
}
 
export default GalleryLinks;