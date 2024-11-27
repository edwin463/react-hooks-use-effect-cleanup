import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Declare timerID in the scope of useEffect
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
