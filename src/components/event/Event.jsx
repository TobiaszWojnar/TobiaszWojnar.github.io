import React from "react";
import s from "./style.module.css";
import { IconRegistry } from "./../IconRegistry";
import { Tooltip } from "react-tooltip";

const Event = ({
  label,
  title,
  icon,
  xOffset,
  year,
  color,
  date,
  tags,
  photo,
  shortDescription,
  longDescription,
  assets,
}) => {
  const selectorTitle = '_'+title.replace(/\s+/g, "-").replace(/[^\w\s]/gi, "");
  return (
    <>
      <div className={s.wrapper} style={{ top: "45px", left: xOffset + "px" }}>
        <button
          className={s.event}
          id={selectorTitle}
          style={{ backgroundColor: color }}
        >
          <IconRegistry iconName={icon} />
        </button>
        <p className={s.label}>{label}</p>
      </div>
      <Tooltip anchorSelect={`#${selectorTitle}`} style={{ zIndex: 10000 }}>
        {title}
      </Tooltip>
    </>
  );
};

export default Event;
