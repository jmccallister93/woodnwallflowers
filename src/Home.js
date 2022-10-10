import Card from "./Card";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Welcome to Wood n Wallflowers</h1>
      <span className="home__subheader">BACKDROPS, BALLOONS, & MORE!</span>
      <Card />
      <div className="about">
        <h1 className="home__header">About Us</h1>
        <p>
            Blah Blah Blah
        </p>
      </div>
    </div>
  );
};

export default Home;
