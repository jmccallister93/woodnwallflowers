import "./Home.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import carousel_img01 from "../src/Images/bank_circle.jpg";
import carousel_img02 from "../src/Images/birthday_40.jpg";
import carousel_img03 from "../src/Images/champ_wall2.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Welcome to Wood n Wallflowers</h1>
      <h3 className="home__subheader">Backdrops, Balloons, and More!</h3>
        
    </div>
  );
};

export default Home;


{/* <Carousel>
<div className="carousel__wrapper">
  <div>
    <img src={carousel_img01} alt="" className="carousel__image" />
    <p className="legend">Balloon Circles</p>
  </div>
  <div>
    <img src={carousel_img02} alt="" className="carousel__image" />
    <p className="legend">Birthday Backdrops</p>
  </div>
  <div>
    <img src={carousel_img03} alt="" className="carousel__image" />
    <p className="legend">Champagne Walls</p>
  </div>
</div>
</Carousel> */}