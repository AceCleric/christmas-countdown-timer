import React, { useState, useEffect } from 'react';

const ChristmasCountDown = () => {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Month is indexed 0 so need to pick 11 which is december
      const christmas = new Date(now.getFullYear(), 11, 25);
      if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      const difference = christmas - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeUntilChristmas(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='christmasCountdown'>
      <h1>Countdown to christmas</h1>
      <p>
        {timeUntilChristmas}
      </p>
    </div>
  );
}

export default ChristmasCountDown;