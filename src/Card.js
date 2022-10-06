import "./Card.scss";

const Card = () => {
  return (
    <div className="card__wrapper">
      <div className="card" id="card__gallery">
        <p className="card__text">Gallery</p>
      </div>
      <div className="card" id="card__pricing">
        <p className="card__text">Pricing</p>
      </div>
      <div className="card" id="card__contact">
        <p className="card__text">Contact</p>
      </div>
    </div>
  );
};

export default Card;
