import React from "react";
import s from "./style.module.css";
import classNames from "classnames";
import { Tooltip } from "react-tooltip";
import {HORIZONTAL_OFFSET} from "../timeline/Timeline.tsx";
import {TimePeriodPropType} from '../types.ts';

const TimePeriod = ({
  label,
  title,
  color,
  xOffset,
  widthH,
  horizontal = true,
}: TimePeriodPropType) => {
  const selectorTitle =
    "_" + title.replace(/\s+/g, "-").replace(/[^\w\s]/gi, "");
  return (
    <button
      className={s.time_period}
      id={selectorTitle}
      style={{
        left: xOffset + HORIZONTAL_OFFSET + "px",
        width: widthH + "px",
        background: `linear-gradient(${
          horizontal ? "0.25" : "0.5"
        }turn, transparent, ${color}, ${color}, ${color},${color},${color}, transparent)`,
      }}
    >
      <p className={classNames(s.label, widthH > 150 ? s.large : s.medium)}>
        {label}
      </p>
      <Tooltip anchorSelect={`#${selectorTitle}`} className="tooltip">
        {title}
      </Tooltip>
    </button>
  );
};

export default TimePeriod;
