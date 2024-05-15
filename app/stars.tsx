import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
}

const StarFieldAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;  // Exit if the canvas is not yet initialized

    const ctx = canvas.getContext('2d');
    if (!ctx) return;  // Exit if the context could not be retrieved

    const stars = 1000; // Number of stars in the starfield
    const speed = 0.05;
    let starArray: Star[] = []; // Array of stars with explicit type

    function initializeStars() {
      starArray = [];
      for (let i = 0; i < stars; i++) {
        starArray.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width
        });
      }
    }

    function moveStars() {
      for (let i = 0; i < stars; i++) {
        starArray[i].z -= speed;
        if (starArray[i].z <= 0) {
          starArray[i].x = Math.random() * canvas.width - canvas.width / 2,
          starArray[i].y = Math.random() * canvas.height - canvas.height / 2,
          starArray[i].z = canvas.width;
        }
      }
    }

    function drawStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      for (let i = 0; i < stars; i++) {
        const star = starArray[i];
        const x = star.x / (star.z * 0.001);
        const y = star.y / (star.z * 0.001);
        const size = 1 / (star.z * 0.001);
        ctx.beginPath();
        ctx.arc(x + canvas.width / 2, y + canvas.height / 2, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function update() {
      moveStars();
      drawStars();
      requestAnimationFrame(update);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
    update();

    window.onresize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />;
};

export default StarFieldAnimation;


