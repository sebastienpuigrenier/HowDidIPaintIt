import React from "react";
import CircleMarker from "./CircleMarker";

import "./PolaroidMaxi.css";

function PolaroidMaxi() {
  const tempObject = {
    pseudo: "Kirdom",
    image: ["../img/bloodbowl_player-min.png"],
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
      <CircleMarker />
    </div>
  );
}

export default PolaroidMaxi;
