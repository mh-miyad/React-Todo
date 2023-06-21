import React, { useEffect, useState } from "react";

const TimeCom = () => {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [d, setD] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setyear] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      setH(date.getHours());
      setM(date.getMinutes());
      setS(date.getSeconds());

      setD(getDayName(date.getDay()));
      setMonth(date.getMonth());
      setyear(date.getFullYear());
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  const getDayName = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };
  const formattedHour = h > 12 ? h - 12 : h;
  return (
    <div>
      <div>
        <div className='stat flex '>
          <div className='stat-value text-xl'>{d}</div>

          <div className='stat-title'>{year}</div>
        </div>
      </div>
      <div className='stats shadow'>
        <div className='stat place-items-center'>
          <div className='stat-title'>Hour</div>
          <div className='stat-value'>{formattedHour}</div>
          <div className='stat-title'>Am</div>
        </div>

        <div className='stat place-items-center'>
          <div className='stat-title'>Minutes</div>
          <div className='stat-value text-secondary'>{m}</div>
        </div>

        <div className='stat place-items-center'>
          <div className='stat-title'>Second</div>
          <span className='countdown font-mono text-6xl'>
            <span style={{ "--value": `${s}` }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeCom;
