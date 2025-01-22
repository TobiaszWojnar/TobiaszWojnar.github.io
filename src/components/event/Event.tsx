import React, { useState, useContext } from "react";
import s from "./style.module.css";
import classNames from "classnames";
import { IconRegistry } from "../IconRegistry.tsx";
import { Tooltip } from "react-tooltip";
import { ModalContext } from "../timelineApp/TimelineApp.tsx";
import {HORIZONTAL_OFFSET} from "../timeline/Timeline.tsx";
import { EventPropType } from "../types.ts";

const Event = ({
  label,
  title,
  icon,
  xOffset,
  yOffset,
  year,
  color,
  shortDescription,
  longDescription,
}:EventPropType) => {
  const { modalContent, setModalContent } =
    useContext(ModalContext);
  const [isHovered, setIsHovered] = useState(false);
  const selectorTitle =
    "_" + title.replace(/\s+/g, "-").replace(/[^\w\s]/gi, "");

  const renderModalContent = () => {
    return (
      <>
        <h2>{title}</h2>
        <p className={s.description}>{longDescription}</p>
        <br />
        <button onClick={() => setModalContent(null)}>Close</button>
      </>
    );
  };

  return (
    <>
      <div
        className={classNames(
          s.wrapper,
          modalContent && isHovered ? s.current : ""
        )}
        style={{
          top: yOffset * 0.5 + "em",
          left: xOffset + HORIZONTAL_OFFSET + "px"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={s.event}
          id={selectorTitle}
          style={{ backgroundColor: color }}
          onClick={() => {
            setModalContent(renderModalContent());// TODO check if it performs destruction of that code?
          }}
        >
          <IconRegistry iconName={icon} />
        </button>
        <p className={s.label}>{label}</p>
      </div>
      <Tooltip anchorSelect={`#${selectorTitle}`} className="tooltip">
        <h2>
          {title} - {year}
        </h2>
        <p className={s.description}>{shortDescription}</p>
      </Tooltip>
    </>
  );
};

export default Event;
