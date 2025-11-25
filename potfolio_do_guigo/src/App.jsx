import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
};

export default App;
