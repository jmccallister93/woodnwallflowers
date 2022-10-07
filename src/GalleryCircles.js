import "./Gallery.scss";
import babyshower from "../src/Images/baby_shower.jpg";
import bankcircle from "../src/Images/bank_circle.jpg";
import birthdaycircle from "../src/Images/birthday_circle.jpg";
import valentines from "../src/Images/class_valentines.jpg";
import GalleryLinks from "./GalleryLinks";

const GalleryCircles = () => {
  return (
    <>
      <span className="title">Circle Arch</span>
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
        </div>
        <div className="column">
          <img
            className="filteredDiv rentals circle signs"
            src={birthdaycircle}
            alt=""
          />
        </div>
        <div className="column">
          <img
            className="filteredDiv rentals circles signs"
            src={valentines}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default GalleryCircles;
