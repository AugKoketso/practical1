"use client"; 
import React, { useEffect, useState, CSSProperties } from 'react';

const BoxComponent = () => {
  // State to handle the text dynamically, now including more content and formatted for multiline
  const [crawlText, setCrawlText] = useState(`Episode IV, 
  A NEW HOPE
   It is a period of civil war.
  Rebel spaceships, striking
  from a hidden base, have won
  their first victory against
  the evil Galactic Empire.
  
  During the battle, Rebel
  spies managed to steal secret
  plans to the Empire's
  ultimate weapon, the DEATH
  STAR, an armored space
  station with enough power to
  destroy an entire planet.
  
  Pursued by the Empire's
  sinister agents, Princess
  Leia races home aboard her
  starship, custodian of the
  stolen plans that can save
  her people and restore
  freedom to the galaxy....
  
  


  
Episode V
THE EMPIRE STRIKES BACK
It is a dark time for the
Rebellion. Although the Death
Star has been destroyed,
Imperial troops have driven the
Rebel forces from their hidden
base and pursued them across
the galaxy.

Evading the dreaded Imperial
Starfleet, a group of freedom
fighters led by Luke Skywalker
has established a new secret
base on the remote ice world
of Hoth.

The evil lord Darth Vader,
obsessed with finding young
Skywalker, has dispatched
thousands of remote probes into
the far reaches of space....
  `);

  // Inline styles for the starfield box
  const boxStyle: CSSProperties = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'black',
    perspective: '400px'  // Perspective needed for the 3D effect
  };

  // Inline styles for the text
  const textStyle: CSSProperties = {
    position: 'absolute',
    top: '100vh', // Starting point off-screen
    left: '50%',
    transform: 'translateX(-50%) rotateX(20deg) translateZ(0)',
    transformOrigin: '50% 100%',
    whiteSpace: 'pre-wrap',
    fontSize: '2em',
    fontFamily: '"Arial", sans-serif',
    color: 'yellow',
    animation: 'crawl 120s linear infinite' // Ensure a smooth crawl
  };

  // useEffect to add keyframes and adjust styles dynamically
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @keyframes crawl {
        0% {
          top: 100vh;
        }
        100% {
          top: -300vh; // Adjust based on the amount of text
        }
      }
      
      .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: '50%';
        box-shadow: '0 0 5px #fff';
        animation: moveStar 2s linear infinite;
      }

      @keyframes moveStar {
        from {
          transform: translateZ(0);
          opacity: 1;
        }
        to {
          transform: translateZ(600px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    // Generate stars dynamically
    const starCount = 100;
    const box = document.getElementById('starfield');
    for (let i = 0; i < starCount; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2 to 5 seconds
      box.appendChild(star);
    }
  }, []);

  return (
    <div id="starfield" style={boxStyle}>
      <div style={textStyle}>
        {crawlText}
      </div>
    </div>
  );
}

export default BoxComponent;







