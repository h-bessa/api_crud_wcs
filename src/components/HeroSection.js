import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src={require("../assets/videos/video-01.mp4").default}
        autoPlay
        loop
        muted
      />
      <h1>Les Argonautes</h1>
      <p>Recrutez votre équipage !</p>
    </div>
  );
}

export default HeroSection;
