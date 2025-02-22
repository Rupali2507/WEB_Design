import React from "react";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Open_Source from "./pages/Open_Source";
import Navbar from "./components/Navbar";
import Newsletter from "./pages/Newsletter";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path="./" element={<Home />} />
        <Route path="./about" element={<About />} />
        <Route path="./services" element={<Services />} />
        <Route path="./blog" element={<Blog />} />
        <Route path="./open-source" element={<Open_Source />} />
      </Routes>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
