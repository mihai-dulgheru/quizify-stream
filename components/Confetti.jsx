'use client';

import { useEffect, useRef } from 'react';

const COLOR_DIGIT = 'ABCDEF1234567890';
const SHAPES = ['square', 'triangle'];

function Confetti({
  confettiCount = 100,
  duration = 4000,
  showConfetti = false,
}) {
  const containerRef = useRef(null);

  const generateRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
  };

  useEffect(() => {
    const generateConfetti = () => {
      const container = containerRef.current;
      if (container) {
        for (let i = 0; i < confettiCount; i++) {
          const confetti = document.createElement('div');
          const positionX = Math.random() * window.innerWidth;
          const positionY = Math.random() * window.innerHeight;
          const rotation = Math.random() * 360;
          const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
          confetti.style.left = `${positionX}px`;
          confetti.style.top = `${positionY}px`;
          confetti.style.transform = `rotate(${rotation}deg)`;
          confetti.className =
            'confetti ' + SHAPES[Math.floor(Math.random() * 3)];
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;
          confetti.style.backgroundColor = generateRandomColor();
          container.appendChild(confetti);

          setTimeout(() => {
            container.removeChild(confetti);
          }, duration);
        }
      }
    };

    if (showConfetti) {
      generateConfetti();
    }
  }, [confettiCount, duration, showConfetti]);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 h-full w-full"
      id="confetti-container"
      ref={containerRef}
    />
  );
}

export default Confetti;
