import React from "react";
import { Link } from "react-router-dom";
import "./PolaroidMini.css";

function PolaroidMini({ data }) {
  const tempObject = data;
  const link =
    data.image[0] === "../img/bloodbowl_player-min.png"
      ? "/figurinedetailsexample"
      : "/figurinedetails";

  return (
    <div className="polaroid-mini">
      <Link to={link}>
        <img
          src={tempObject.image[0]}
          alt={`${tempObject.figurine} peint par ${tempObject.pseudo}`}
        />
      </Link>
      <p>{tempObject.pseudo}</p>
    </div>
  );
}

export default PolaroidMini;
