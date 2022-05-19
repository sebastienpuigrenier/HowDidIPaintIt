import React from "react";

import MainGallery from "../components/MainGallery";

function Home({ isScrolled }) {
  return (
    <div className={`content clearfix ${isScrolled ? "scrolled" : ""}`}>
      <MainGallery />
    </div>
  );
}

export default Home;
