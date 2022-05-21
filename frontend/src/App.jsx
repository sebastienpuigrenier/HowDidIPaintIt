import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import FigurineDetails from "./pages/FigurineDetails";
import FigurineDetailsExample from "./pages/FigurineDetailsExample";

import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [deltaYScroll, setdeltaYScroll] = React.useState(100);

  const handleOnClick = () => {
    setIsScrolled(true);
  };

  const handleMousewheel = (e) => {
    if (e.deltaY > 0) {
      setIsScrolled(true);
      setdeltaYScroll(e.deltaY);
    }
  };

  return (
    <div className="App">
      <Header
        isScrolled={isScrolled}
        handleOnClick={handleOnClick}
        handleMousewheel={handleMousewheel}
      />
      <NavBar deltaYScroll={deltaYScroll} />
      <div>
        <Routes>
          <Route path="/" element={<Home isScrolled={isScrolled} />} />
          <Route path="/figurinedetails" element={<FigurineDetails />} />
          <Route
            path="/figurinedetailsexample"
            element={<FigurineDetailsExample />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
