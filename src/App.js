import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import FetchData from "./Components/FetchData"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/general" element={<FetchData cat="general" />} />
          <Route path="/business" element={<FetchData cat="business" />} />
          <Route path="/science" element={<FetchData cat="science" />} />
          <Route path="/health" element={<FetchData cat="health" />} />
          <Route path="/technology" element={<FetchData cat="technology" />} />
          <Route path="/sports" element={<FetchData cat="sports" />} />
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
