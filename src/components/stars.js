import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import starImage from './star.png';

const StarsContainer = styled.div`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  justify-items: center;
  align-items: center;
  transform: translate(-50%, -50%);
`;

const Star = styled.img`
  position: absolute;
  width: 100px; 
  height: 100px; 
  opacity: 1; 
  border-radius: 50%;
`;

const generateRandomRotation = () => {
  return `rotate(${Math.random() * 360}deg)`;
};

const generateRandomPosition = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return `translate(${x}px, ${y}px)`;
};

const StarsBackground = () => {
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const numStars = 100;
    const generatedStars = [];

    for (let i = 0; i < numStars; i++) {
      generatedStars.push({
        rotation: generateRandomRotation(),
        position: generateRandomPosition(),
      });
    }

    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const container = containerRef.current;
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const offsetX = (mouseX - centerX) / 20;
      const offsetY = (mouseY - centerY) / 20;

      container.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <StarsContainer ref={containerRef}>
      {stars.map((star, index) => (
        <Star
          key={index}
          src={starImage}
          style={{
            transform: `${star.rotation} ${star.position}`,
          }}
        />
      ))}
    </StarsContainer>
  );
};

export default StarsBackground;
