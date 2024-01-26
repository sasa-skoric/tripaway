import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/tripaway/" element={<Home />} />
          <Route path="/tripaway/about" element={<About />} />
          <Route path="/tripaway/service" element={<Service />} />
          <Route path="/tripaway/contact" element={<Contact />} />
          <Route path="/tripaway/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
