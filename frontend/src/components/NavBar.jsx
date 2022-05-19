import React from "react";

function NavBar({ deltaYScroll }) {
  return (
    <div>
      <div className="navbar-title" style={{ height: deltaYScroll }}>
        <h1 className="navbar-h1">How did I paint it</h1>
      </div>
      <h2>NavBar</h2>
      <h3>Ceci est la navbar</h3>
    </div>
  );
}

export default NavBar;
