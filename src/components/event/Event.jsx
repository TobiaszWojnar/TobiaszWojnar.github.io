import React, { useState, useContext } from "react";
import s from "./style.module.css";
import classNames from "classnames";
import { IconRegistry } from "./../IconRegistry";
import { Tooltip } from "react-tooltip";
import { ModalContext } from "../timelineApp/TimelineApp";
import {HORIZONTAL_OFFSET} from "../timeline/Timeline";
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
}) => {
  const { isModalOpen, setModalOpen, setModalContent } =
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
        <button onClick={() => setModalOpen(false)}>Close</button>
      </>
    );
  };

  return (
    <>
      <div
        className={classNames(
          s.wrapper,
          !isModalOpen && isHovered ? s.current : ""
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
            setModalContent(renderModalContent());
            setModalOpen(true);
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
