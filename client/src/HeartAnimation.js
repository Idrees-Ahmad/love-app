import React from 'react';
import './App.css';

function HeartAnimation() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="heart-container">
      {hearts.map((_, i) => (
        <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}></div>
      ))}
    </div>
  );
}

export default HeartAnimation;
