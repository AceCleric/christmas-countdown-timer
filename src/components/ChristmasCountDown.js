import React, { useState, useEffect } from 'react';
import { sendEmail } from '../services/EmailService';

const ChristmasCountDown = () => {
  const [timeUntilChristmas, setTimeUntilChristmas] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Month is indexed 0 so need to pick 11 which is december
      const christmas = new Date(currentYear, 11, 25);
      const dayAfterChristmas = new Date(currentYear, 11, 26);

      console.warn("christmas", christmas);
      console.warn("dayAfterChristmas", dayAfterChristmas);

      // Check if today is Christmas and email hasn't been sent yet
      if (now.toDateString() === christmas.toDateString() && !emailSent) {
        const templateParams = {
          from_name: "Secret Santa",
          to_email: "receiver_email@test.com",
          message: "Happy holidays!",
          to_name: "Santa Claus"
        };

        sendEmail(templateParams);
        setEmailSent(true);
      } else if (now >= dayAfterChristmas && emailSent) {
        // It's after Christmas, reset emailSent for next year
        setEmailSent(false);
    }

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
  }, [emailSent]);

  return (
    <div className='christmasCountdown'>
      <h1>Countdown to Christmas</h1>
      <p>
        {timeUntilChristmas}
      </p>
    </div>
  );
}

export default ChristmasCountDown;