import "./Card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card__wrapper">
      <Link to="/gallery" style={{ textDecoration: "none" }}>
        <div className="card" id="card__gallery">
          <p className="card__text">Gallery</p>
        </div>
      </Link>
      <Link to="/pricing" style={{ textDecoration: "none" }}>
      <div className="card" id="card__pricing">
        <p className="card__text">Pricing</p>
      </div>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
      <div className="card" id="card__contact">
        <p className="card__text">Contact</p>
      </div>
      </Link>
    </div>
  );
};

export default Card;
