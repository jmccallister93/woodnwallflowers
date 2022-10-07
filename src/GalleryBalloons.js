import "./Gallery.scss";
import birthday1 from "../src/Images/birthday_1.jpg";
import birthday30 from "../src/Images/birthday_30.png";
import birthday40 from "../src/Images/birthday_40.jpg";
import bridalshower1 from "../src/Images/bridal_shower.jpg";
import bridalshower2 from "../src/Images/bridal_shower2.jpg";
import christmas from "../src/Images/class_christmas.jpg";
import halloween from "../src/Images/class_halloween.jpg";
import stpatricks from "../src/Images/class_stpatricks.jpg";
import couch from "../src/Images/couch.PNG";
import flamingo from "../src/Images/flamingo.jpg";
import birthday13 from "../src/Images/this_is_13.jpg";
import wine from "../src/Images/wine_barrel.jpg";
import GalleryLinks from "./GalleryLinks";

const GalleryBalloons = () => {
  return (
    <>
      <span className="title">Balloon Garlands</span>
      <GalleryLinks />
      <div className="row">
        <div className="column">
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
          <img className="filteredDiv balloons" src={birthday40} alt="" />
        </div>
        <div className="column">
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
          <img
            className="filteredDiv rentals balloons"
            src={christmas}
            alt=""
          />
          <img className="filteredDiv balloons" src={halloween} alt="" />
        </div>
        <div className="column">
          <img className="filteredDiv balloons" src={stpatricks} alt="" />
          <img className="filteredDiv balloons" src={couch} alt="" />
          <img className="filteredDiv balloons" src={flamingo} alt="" />
          <img className="filteredDiv balloons" src={wine} alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleryBalloons;
