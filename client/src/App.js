import React, { useState } from 'react';
import './App.css';
import HeartAnimation from './HeartAnimation';

function App() {
  const [message, setMessage] = useState('');
  const [showHearts, setShowHearts] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const handleClick = async () => {
    const res = await fetch('http://localhost:5000/love');
    const data = await res.json();
    setMessage(data.message);
    setShowHearts(true);
    setShowMain(false);
    setTimeout(() => setShowHearts(false), 5000);
  };

  const handleBack = () => {
    setMessage('');
    setShowMain(true);
  };

  return (
    <div className="container">
      <img src="/love.png" alt="Love" className="love-img" />
      {showMain ? (
        <>
          <h1>Hi Jaan 💖</h1>
          <button onClick={handleClick}>Click Me</button>
        </>
      ) : (
        <>
          {message && <p className="love-message">{message}</p>}
          {showHearts && <HeartAnimation />}
          <button onClick={handleBack} style={{ marginTop: '30px' }}>Go Back</button>
        </>
      )}
    </div>
  );
}

export default App;
