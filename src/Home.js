import Card from "./Card";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Welcome to Wood n Wallflowers</h1>
      <span className="home__subheader">Backdrops, Balloons, and More!</span>
      <Card />
    </div>
  );
};

export default Home;
