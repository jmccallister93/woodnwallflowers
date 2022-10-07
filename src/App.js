import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

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
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
