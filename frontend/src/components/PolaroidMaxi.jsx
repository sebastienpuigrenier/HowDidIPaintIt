import React from "react";

import "./PolaroidMaxi.css";

function PolaroidMaxi() {
  const tempObject = {
    pseudo: "Kirdom",
    image: ["https://unsplash.it/300/300"],
    figurine: "BloodBowl Player",
  };

  return (
    <div className="polaroid-maxi">
      <img
        src={tempObject.image[0]}
        alt={`${tempObject.figurine} peint par ${tempObject.pseudo}`}
      />
      <p>{tempObject.pseudo}</p>
      <p>{tempObject.pseudo}</p>
    </div>
  );
}

export default PolaroidMaxi;
