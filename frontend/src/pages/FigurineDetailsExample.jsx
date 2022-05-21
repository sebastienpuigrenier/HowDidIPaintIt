import React from "react";

import PolaroidMaxiExample from "../components/PolaroidMaxiExample";
import StickyNote from "../components/StickyNote";

function FigurineDetails() {
  return (
    <div className="figurine-details-container">
      <PolaroidMaxiExample />
      <div className="figurine-details-stikynote-list">
        <StickyNote data={["Sous-couche", "Abaddon Black"]} />
        <StickyNote data={["Base", "Ionrach Skin"]} />
        <StickyNote data={["Ombrage", "Drakenhof Nightshade"]} />
        <StickyNote data={["Layer", "Deepkin Flesh"]} />
        <StickyNote data={["Layer", "Pallid Wych Flesh"]} />
      </div>
    </div>
  );
}

export default FigurineDetails;
