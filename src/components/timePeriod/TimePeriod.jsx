import React from "react";
import s from "./style.module.css";
import { Tooltip } from "react-tooltip";

const TimePeriod = ({
  label,
  title,
  xOffset,
  widthH,
  year,
  color,
  shortDescription,
  longDescription,
  horizontal = true,
}) => {
  const selectorTitle = title.replace(/\s+/g, "-").replace(/[^\w\s]/gi, "");
  return (
    <>
      <button
        className={s.time_period}
        id={selectorTitle}
        style={{
          left: xOffset + "px",
          width: widthH + "px",
          background: `linear-gradient(${
            horizontal ? "0.25" : "0.5"
          }turn, transparent, ${color}, ${color}, ${color}, transparent)`,
        }}
      >
        <p className={s.label}>{title}</p>
      </button>
      <Tooltip anchorSelect={`#${selectorTitle}`} style={{ zIndex: 10000 }}>
        {title}
      </Tooltip>
    </>
  );
};

export default TimePeriod;
