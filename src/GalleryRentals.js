import "./Gallery.scss";
import babyshower from "../src/Images/baby_shower.jpg";
import bankcircle from "../src/Images/bank_circle.jpg";
import birthday1 from "../src/Images/birthday_1.jpg";
import birthday30 from "../src/Images/birthday_30.png";
import birthdaycircle from "../src/Images/birthday_circle.jpg";
import bridalshower1 from "../src/Images/bridal_shower.jpg";
import bridalshower2 from "../src/Images/bridal_shower2.jpg";
import champwall1 from "../src/Images/champ_wall.jpg";
import champwall2 from "../src/Images/champ_wall2.jpg";
import christmas from "../src/Images/class_christmas.jpg";
import valentines from "../src/Images/class_valentines.jpg";
import momosa from "../src/Images/momosa.jpg";
import birthday13 from "../src/Images/this_is_13.jpg";
import wedding from "../src/Images/wedding_board.jpg";
import GalleryLinks from "./GalleryLinks";

const GalleryRentals = () => {
  return (
    <>
    <span className="title">Rentals</span>
    <GalleryLinks />
      <div className="row">
        <div className="column">
          <img
            className="filteredDiv rentals circles signs"
            src={babyshower}
            alt=""
          />
          <img
            className="filteredDiv rentals circles"
            src={bankcircle}
            alt=""
          />
          <img
            className="filteredDiv rentals balloons signs"
            src={birthday1}
            alt=""
          />
          <img
            className="filteredDiv rentals balloons signs"
            src={birthday13}
            alt=""
          />
          <img
            className="filteredDiv rentals balloons"
            src={birthday30}
            alt=""
          />
        </div>
        <div className="column">
          <img
            className="filteredDiv rentals circle signs"
            src={birthdaycircle}
            alt=""
          />
          <img
            className="filteredDiv rentals balloons signs"
            src={bridalshower1}
            alt=""
          />
          <img
            className="filteredDiv rentals balloons signs"
            src={bridalshower2}
            alt=""
          />
          <img className="filteredDiv rentals" src={champwall1} alt="" />
          <img className="filteredDiv rentals" src={momosa} alt="" />
        </div>
        <div className="column">
          <img className="filteredDiv rentals" src={champwall2} alt="" />
          <img
            className="filteredDiv rentals balloons"
            src={christmas}
            alt=""
          />
          <img
            className="filteredDiv rentals circles signs"
            src={valentines}
            alt=""
          />
          <img className="filteredDiv rentals" src={wedding} alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleryRentals;
