import React from "react";
import s from "./style.module.css";

const Line = ({ zoomLvl, startDate, endDate }) => {
  return (
    <div className={s.wrapper}>
        <div
          className={s.line}
          style={{ width: (endDate - startDate + 100)* zoomLvl / 100 + "px" }}
        />
      </div>
  );
};

export default Line;
