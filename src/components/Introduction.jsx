import React, { useEffect, useState } from "react";
import "../index.css";
import StarsCanvas from "./canvas/Stars";
import { spaceship } from "../assets";

const Introduction = () => {
  const [showScrollText, setShowScrollText] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSpaceship, setShowSpaceship] = useState(false);

  useEffect(() => {
    const crawlAnimationDuration = 15 * 1000; // Duration of crawl animation in milliseconds
    const timeout = setTimeout(() => {
      setShowScrollText(true);
    }, crawlAnimationDuration);

    const spaceshipTimeout = setTimeout(() => {
      setShowSpaceship(true);
    }, 15000); // Show spaceship after 15 seconds

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

  return (
    <div className="introduction">
      <StarsCanvas />
      <div className={`crawl ${showScrollText ? "hide" : ""}`}>
        <p>Greetings Cyber Traveller,</p>
        <p>My name is Bill</p>
        <p>I am an aspiring Software Engineer</p>
        {/* <p>In a universe where dreams take flight,</p>
        <p>I, a passionate soul, forge my own destiny.</p>
        <p>Embracing the power of Javascript,</p>
        <p>I navigate the ever-expanding cosmos of development.</p>
        <p>With each line of code, I shape my visions into reality.</p>
        <p>Through countless challenges and moments of inspiration,</p>
        <p>I strive to master the art of crafting immersive experiences.</p>
        <p>Join me on this extraordinary odyssey,</p>
        <p>as we transcend boundaries and bring ideas to life.</p> */}
      </div>

      {showSpaceship && (
        <img
          src={spaceship}
          alt="Spaceship"
          className={`spaceship ${isClicked ? "crawl-bottom" : ""}`}
          onClick={() => setIsClicked(true)}
        />
      )}

      {showScrollText && (
        <p className="scroll-text">Scroll Down to Start Adventure</p>
      )}
    </div>
  );
};

export default Introduction;
