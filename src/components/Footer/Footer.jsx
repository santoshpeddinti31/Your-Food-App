import React from "react";
import "../Footer/Footer.css";
import CurrentTrack from "../CurrentTrack/CurrentTrack";
import PlayerControls from "../PlayerControls/PlayerControls";
import Volume from "../Volume/Volume";

export default function Footer() {
  return (
    <div className="foot">
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
}
