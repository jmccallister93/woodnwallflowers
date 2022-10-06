import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Pricing from "./Pricing";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/woodnwallflowers" element={<Home />} />
            <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
