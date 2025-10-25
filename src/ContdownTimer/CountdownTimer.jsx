import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalIdRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalIdRef.current);
    setTime(initialTime);
  };

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    console.log('===>HOURS', hours);
    const minutes = Math.floor((seconds % 3600) / 60);
    console.log('===>HOURS', minutes);
    const remainingSeconds = seconds % 60;
    console.log('===>SEEEE', remainingSeconds);
    return `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="countdown-timer">
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={handleStart} disabled={isRunning || time <= 0}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
