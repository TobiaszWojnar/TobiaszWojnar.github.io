import React, { useState, useEffect } from "react";
import s from "./style.module.css";

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-10-12");
    const today = new Date();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const daysUntilTarget = Math.floor(
      (targetDate - today) / millisecondsPerDay
    );
    setDaysLeft(daysUntilTarget);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.countdown}>
      <h1> {daysLeft} </h1>
      <p>Dni pozostało do ślubu</p>
      </div>
    </div>
  );
};

export default Countdown;
