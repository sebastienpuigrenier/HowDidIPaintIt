import React from "react";
import "./StickyNote.css";

function StickyNote({ data }) {
  let color = "yellow";
  switch (data[0]) {
    case "Sous-couche":
      color = "blue";
      break;
    case "Base":
      color = "yellow";
      break;
    case "Ombrage":
      color = "green";
      break;
    case "Layer":
      color = "violet";
      break;

    default:
      color = "yellow";
  }

  return (
    <div className={`sticky-note ${color}`}>
      <details>
        <summary>{data[0]}</summary>
        <p>Ø {data[1]}</p>
      </details>
    </div>
  );
}

export default StickyNote;
