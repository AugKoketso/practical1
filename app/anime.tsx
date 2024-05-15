"use client";
import React, { useEffect, CSSProperties } from 'react';

const BoxComponent = () => {
  // Correctly typed styles using CSSProperties
  const boxStyle: CSSProperties = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'black'
  };

  const textStyle: CSSProperties = {
    position: 'absolute',
    color: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10
  };

  useEffect(() => {
    const starCount = 100; // Number of stars you want
    const box = document.getElementById('starfield');
    if (!box) return;

    for (let i = 0; i < starCount; i++) {
      let star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = '2px';
      star.style.height = '2px';
      star.style.background = 'white';
      star.style.borderRadius = '50%';
      star.style.boxShadow = '0 0 5px #fff';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animation = `moveStar ${Math.random() * 3 + 2}s linear infinite`;
      box.appendChild(star);
    }

    // Dynamically create CSS for keyframes animation
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
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
  }, []);

  return (
    <div id="starfield" style={boxStyle}>
      <h1 style={textStyle}>This is the BoxComponent</h1>
    </div>
  );
}

export default BoxComponent;






