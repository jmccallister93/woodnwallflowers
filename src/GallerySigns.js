import "./Gallery.scss";
import babyshower from "../src/Images/baby_shower.jpg";
import birthday1 from "../src/Images/birthday_1.jpg";
import birthdaycircle from "../src/Images/birthday_circle.jpg";
import bridalshower1 from "../src/Images/bridal_shower.jpg";
import bridalshower2 from "../src/Images/bridal_shower2.jpg";
import valentines from "../src/Images/class_valentines.jpg";
import birthday13 from "../src/Images/this_is_13.jpg";
import GalleryLinks from "./GalleryLinks";

const GallerySigns = () => {
  return (
    <>
      <span className="title">Sign Options</span>
      <GalleryLinks />
      <div className="row">
        <div className="column">
          <img
            className="filteredDiv rentals circles signs"
            src={babyshower}
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

export default GallerySigns;
