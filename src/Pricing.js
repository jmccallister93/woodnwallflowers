import "./Pricing.scss";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__header">Price List</span>
      <div className="pricing__wrapper">
        <div className="pricing__rentals">
          <span className="pricing__subheaders">Rentals</span>
          <br />
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
          <br />
          <Link
            to={"/gallery/rentals"}
            style={{ textDecoration: "none", color: "#3E7C17" }}
          >
            {" "}
            <button className="view-examples">Examples</button>
          </Link>
        </div>
        <div className="pricing__rentals">
          <span className="pricing__subheaders" id="styling-options">
            Styling Options
          </span>
          <br />
          <br />
          <span className="pricing__subheaders" id="balloon-garlands">
            Balloon Garlands
          </span>
          <div className="pricing__subsection">
            <ul className="pricing__rentals-ul" id="garland-ft">
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
            </ul>
            <br />
            <Link
            to={"/gallery/balloons"}
            style={{ textDecoration: "none", color: "#3E7C17" }}
          >
            {" "}
            <button className="view-examples">Examples</button>
            </Link>
          </div>
          <span className="pricing__subheaders" id="circle-arch-options">
            Circle Arch Options
          </span>
          <div className="pricing__subsection">
            <ul className="pricing__rentals-ul">
              <div className="pricing__rentals-li-wrapper">
                <li className="pricing__rentals-li-title">180 degrees</li>
                <li className="pricing__rentals-li-price">$300+</li>
              </div>
              <div className="pricing__rentals-li-wrapper">
                <li className="pricing__rentals-li-title">360 degrees</li>
                <li className="pricing__rentals-li-price">$375+</li>
              </div>
            </ul>
            <br />
            <Link
            to={"/gallery/circles"}
            style={{ textDecoration: "none", color: "#3E7C17" }}
          >
            {" "}
            <button className="view-examples">Examples</button>
            </Link>
          </div>
        </div>
        <div className="pricing__rentals">
          <span className="pricing__subheaders">Sign Options</span>
          <br />
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
              <li className="pricing__rentals-li-title">
                "Bride To Be" (WOOD)
              </li>
              <li className="pricing__rentals-li-price">$35</li>
            </div>
            <div className="pricing__rentals-li-wrapper">
              <li className="pricing__rentals-li-title">
                "Happy Birthday" (LED)
              </li>
              <li className="pricing__rentals-li-price">$55</li>
            </div>
            <div className="pricing__rentals-li-wrapper">
              <li className="pricing__rentals-li-title">
                "It Was Always You" (LED)
              </li>
              <li className="pricing__rentals-li-price">$85</li>
            </div>
            <div className="pricing__rentals-li-wrapper">
              <li className="pricing__rentals-li-title">Custom Signs</li>
              <li className="pricing__rentals-li-price">$TBD</li>
            </div>
            <br />
            <Link
            to={"/gallery/signs"}
            style={{ textDecoration: "none", color: "#3E7C17" }}
          >
            {" "}
            <button className="view-examples">Examples</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
