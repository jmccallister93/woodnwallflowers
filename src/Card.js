import "./Card.scss";

import carousel_img01 from "../src/Images/bank_circle.jpg";
import carousel_img02 from "../src/Images/birthday_40.jpg";
import carousel_img03 from "../src/Images/champ_wall2.jpg";

const Card = () => {
  return (
    <div className="card__wrapper">
      <div className="card">
        <img src={carousel_img01} alt="" className="card__image" />
        <p className="card__text">Gallery</p>
        <button className="card__button">More Info!</button>
      </div>
      <div className="card">
        <img src={carousel_img02} alt="" className="card__image" />
        <p className="card__text">Pricing</p>
        <button className="card__button">More Info!</button>
      </div>
      <div className="card">
        <img src={carousel_img03} alt="" className="card__image" />
        <p className="card__text">Contact</p>
        <button className="card__button">More Info!</button>
      </div>
    </div>
  );
};

export default Card;
