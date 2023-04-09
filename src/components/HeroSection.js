import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video controls loop muted>
        <source src="/public/videos/video-2.mp4" type="video/mp4" />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn-outline-primary"
          buttonSize="btn-large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
        >
          WATCH TRAILER <i className="fa-solid fa-circle-play"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
