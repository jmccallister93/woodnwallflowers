import "./Pricing.scss";
import price_list from "../src/Images/price_list.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="pricing__header">Price List</h1>
      <div className="pricing__rentals">
        <h1>Rentals</h1>
        <ul className="pricing__rentals-ul">
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Wood Wall Backdrop</li>
            <li className="pricing__rentals-li-price">$250</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Arch Wall Backdrop</li>
            <li className="pricing__rentals-li-price">$200</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Champagne Wall</li>
            <li className="pricing__rentals-li-price">$350</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Champagne Shelf</li>
            <li className="pricing__rentals-li-price">$275</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Gold Circle Arch</li>
            <li className="pricing__rentals-li-price">$85</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Seating Chart</li>
            <li className="pricing__rentals-li-price">$75</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Table Numbers 1-12</li>
            <li className="pricing__rentals-li-price">$45</li>
          </div>
        </ul>
      </div>
      <div className="pricing__styling">
        <h1>Styling Options</h1>
        <h2>Balloon Garlands</h2>
        <ul className="pricing__rentals-ul">
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">5ft</li>
            <li className="pricing__rentals-li-price">$150+</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">10ft</li>
            <li className="pricing__rentals-li-price">$275+</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">15ft</li>
            <li className="pricing__rentals-li-price">$375+</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">20ft</li>
            <li className="pricing__rentals-li-price">$475+</li>
          </div>
          <h2>Circle Arch Options</h2>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">180 degrees</li>
            <li className="pricing__rentals-li-price">$300+</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">360 degrees</li>
            <li className="pricing__rentals-li-price">$375+</li>
          </div>
           <div className="pricing__rentals">
        <h1>Sign Options</h1>
        <ul className="pricing__rentals-ul">
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">"Oh Baby" (LED)</li>
            <li className="pricing__rentals-li-price">$55</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">"Lets Party" (LED)</li>
            <li className="pricing__rentals-li-price">$50</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">"Bride To Be" (WOOD)</li>
            <li className="pricing__rentals-li-price">$35</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">"Happy Birthday" (LED)</li>
            <li className="pricing__rentals-li-price">$55</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">"It Was Always You" (LED)</li>
            <li className="pricing__rentals-li-price">$85</li>
          </div>
          <div className="pricing__rentals-li-wrapper">
            <li className="pricing__rentals-li-title">Custom Signs</li>
            <li className="pricing__rentals-li-price">$TBD</li>
          </div>
        </ul>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
