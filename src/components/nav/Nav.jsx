import React, { useState } from "react";
import s from "./style.module.css";

const Nav = ({ zoomLvl, setZoomLvl, startDate, setStartDate, endDate, setEndDate }) => {
  // const [startDate, setStartDate] = useState(0);
  return (
    <div className={s.nav}>
      <div className={s.wrapper}>
        <div className={s.title}>Zoom</div>
        <div className={s.controls}>
          <button onClick={() => setZoomLvl(zoomLvl * 1.1)}>+</button>
          <button onClick={() => setZoomLvl(zoomLvl * 0.9)}>-</button>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.title}>Time period</div>
        <div className={s.controls}>
          <input type="number" id="startDate" value={startDate} onChange={e => setStartDate(e.nativeEvent.data)} />
          <input type="number" id="endDate" value={endDate} onChange={e => setEndDate(e.nativeEvent.data)} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
