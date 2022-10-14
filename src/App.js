import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import GalleryBalloons from "./GalleryBalloons";
import GalleryCircles from "./GalleryCircles";
import GalleryRentals from "./GalleryRentals";
import GallerySigns from "./GallerySigns";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="app__wrapper">
          <Navbar />
          <div className="content">
          
            <Routes>
              <Route path="/woodnwallflowers" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/rentals" element={<GalleryRentals />} />
              <Route path="/gallery/balloons" element={<GalleryBalloons />} />
              <Route path="/gallery/circles" element={<GalleryCircles />} />
              <Route path="/gallery/signs" element={<GallerySigns />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
