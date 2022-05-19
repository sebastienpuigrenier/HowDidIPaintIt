import React from "react";
import "./PolaroidMaxi.css";

function PolaroidMini() {
  const tempObject = {
    pseudo: "Kirdom",
    image: [
      "https://unsplash.it/200/200",
      "https://unsplash.it/300/300",
      "https://unsplash.it/400/400",
      "https://unsplash.it/500/500",
      "https://unsplash.it/600/600",
    ],
    figurine: "BloodBowl Player",
  };
  const random = Math.round(Math.random() * 3 + 1);

  return (
    <div className="polaroid-maxi">
      <img
        src={tempObject.image[random]}
        alt={`${tempObject.figurine} peint par ${tempObject.pseudo}`}
      />
      <p>{tempObject.pseudo}</p>
    </div>
  );
}

export default PolaroidMini;
