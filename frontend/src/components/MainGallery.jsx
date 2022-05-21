import React from "react";
import PolaroidMini from "./PolaroidMini";

function MainGallery() {
  return (
    <div className="container">
      <h2>Main Gallery</h2>
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["../img/bloodbowl_player-min.png"],
          figurine: "BloodBowl Player",
        }}
      />
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["https://unsplash.it/200/200"],
          figurine: "BloodBowl Player",
        }}
      />
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["https://unsplash.it/300/300"],
          figurine: "BloodBowl Player",
        }}
      />
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["https://unsplash.it/400/400"],
          figurine: "BloodBowl Player",
        }}
      />
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["https://unsplash.it/500/500"],
          figurine: "BloodBowl Player",
        }}
      />
      <PolaroidMini
        data={{
          pseudo: "Kirdom",
          image: ["https://unsplash.it/600/600"],
          figurine: "BloodBowl Player",
        }}
      />
    </div>
  );
}

export default MainGallery;
