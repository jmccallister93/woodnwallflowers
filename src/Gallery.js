import "./Gallery.scss"
import babyshower from "../src/Images/baby_shower.jpg"
import bankcircle from "../src/Images/bank_circle.jpg"
import birthday1 from "../src/Images/birthday_1.jpg"
import birthday30 from "../src/Images/birthday_30.png"
import birthday40 from "../src/Images/birthday_40.jpg"
import birthdaycircle from "../src/Images/birthday_circle.jpg"
import bridalshower1 from "../src/Images/bridal_shower.jpg"
import bridalshower2 from "../src/Images/bridal_shower2.jpg"
import champwall1 from "../src/Images/champ_wall.jpg"
import champwall2 from "../src/Images/champ_wall2.jpg"
import christmas from "../src/Images/class_christmas.jpg"
import halloween from "../src/Images/class_halloween.jpg"
import stpatricks from "../src/Images/class_stpatricks.jpg"
import valentines from "../src/Images/class_valentines.jpg"
import couch from "../src/Images/couch.PNG"
import flamingo from "../src/Images/flamingo.jpg"
import momosa from "../src/Images/momosa.jpg"
import birthday13 from "../src/Images/this_is_13.jpg"
import wedding from "../src/Images/wedding_board.jpg"
import wine from "../src/Images/wine_barrel.jpg"

const Gallery = () => {
    return ( 
    <>
    <div className="header"></div>
    <span className="title">Gallery</span>
    <ul className="header__ul">
        <li className="header__li">All</li>
        <li className="header__li">Rentals</li>
        <li className="header__li">Balloon Garlands</li>
        <li className="header__li">Circle Arch</li>
        <li className="header__li">Sign Options</li>
    </ul>
    <div className="gallery">
        <img src={babyshower} alt="" />
        <img src={bankcircle} alt="" />
        <img src={birthday1} alt="" />
        <img src={birthday13} alt="" />
        <img src={birthday30} alt="" />
        <img src={birthday40} alt="" />
        <img src={birthdaycircle} alt="" />
        <img src={bridalshower1} alt="" />
        <img src={bridalshower2} alt="" />
        <img src={champwall1} alt="" />
        <img src={champwall2} alt="" />
        <img src={christmas} alt="" />
        <img src={halloween} alt="" />
        <img src={stpatricks} alt="" />
        <img src={valentines} alt="" />
        <img src={couch} alt="" />
        <img src={flamingo} alt="" />
        <img src={momosa} alt="" />
        <img src={wedding} alt="" />
        <img src={wine} alt="" />
        <div className="rentals"></div>
        <div className="styling"></div>
        <div className="signs"></div>
    </div> 
    </>
    );
}
 
export default Gallery;