import React from "react";

function Header({ isScrolled, handleOnClick, handleMousewheel }) {
  return (
    <div
      className={`hero ${isScrolled ? "scrolled" : ""}`}
      onWheel={(e) => handleMousewheel(e)}
    >
      <div className="hero-inner">
        <div className="hero-title">
          <h1 className="hero-h1">
            How Did<div className="hero-h1 hero-span">I Paint it !</div>
          </h1>
          <p className="hero-h2">Montrez nous de quoi vous êtes capable</p>
        </div>
        <div
          className="mouse_scroll"
          onClick={() => handleOnClick()}
          aria-hidden="true"
        >
          <div className="mouse">
            <div className="wheel" />
          </div>
          <div>
            <span className="m_scroll_arrows one" />
            <span className="m_scroll_arrows two" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
