import React, { useEffect, useState } from "react";
import "../index.css";
import StarsCanvas from "./canvas/Stars";
import { spaceship } from "../assets";

const Introduction = () => {
  const [showScrollText, setShowScrollText] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSpaceship, setShowSpaceship] = useState(false);

  useEffect(() => {
    const crawlAnimationDuration = 10 * 1000; // Duration of crawl animation in milliseconds
    const timeout = setTimeout(() => {
      setShowScrollText(true);
    }, crawlAnimationDuration);

    const spaceshipTimeout = setTimeout(() => {
      setShowSpaceship(true);
    }, 9000); // Show spaceship after 10 seconds

    if (isClicked) {
      const timeout2 = setTimeout(() => {
        setIsClicked(false);
      }, crawlAnimationDuration + 2000); // Wait for the initial crawl animation to finish before starting the second crawl

      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(spaceshipTimeout);
    };
  }, [isClicked]);

  const handleSpaceshipClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      const targetSection = document.getElementById("About");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
      setShowSpaceship(false);
    }, 2000);
  };

  return (
    <div className="introduction">
      <StarsCanvas />
      <div className={`crawl ${showScrollText ? "hide" : ""}`}>
        <p>Greetings Cyber Traveller,</p>
        <p>My name is Bill</p>
        <p>Welcome to my digital realm,</p>
        <p>Where code becomes art,</p>
        <p>And pixels tell stories.</p>
        <p>Join me on this journey</p>
        <p>Through the realm of algorithms</p>
        <p>And the landscapes of creativity.</p>
      </div>

      {showSpaceship && (
        <img
          src={spaceship}
          alt="Spaceship"
          className={`spaceship ${isClicked ? "crawl-bottom" : ""}`}
          onClick={handleSpaceshipClick}
        />
      )}

      {showScrollText && (
        <p className="scroll-text">Click the Ship to<br/>Start Adventure</p>
      )}
    </div>
  );
};

export default Introduction;
