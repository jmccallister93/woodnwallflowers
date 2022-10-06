import Card from "./Card";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">Welcome to Wood n Wallflowers</h1>
      <h3 className="home__subheader">Backdrops, Balloons, and More!</h3>
      <Card />
    </div>
  );
};

export default Home;
