import React, { useState } from "react";
import s from "./style.module.css";
import { IconRegistry } from "./../IconRegistry";
import { Tooltip } from "react-tooltip";
import Modal from "react-modal";

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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const selectorTitle =
    "_" + title.replace(/\s+/g, "-").replace(/[^\w\s]/gi, "");

  Modal.setAppElement("#timeline-app");
  return (
    <>
      <div
        className={s.wrapper}
        style={{
          top: "45px",
          left: xOffset + "px",
          zIndex: !modalIsOpen && isHovered ? 10 : "auto",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={s.event}
          id={selectorTitle}
          style={{ backgroundColor: color }}
          onClick={() => setModalIsOpen(true)}
        >
          <IconRegistry iconName={icon} />
        </button>
        <p className={s.label}>{label}</p>
      </div>
      <Tooltip anchorSelect={`#${selectorTitle}`} style={{ zIndex: 11 }}>
        <h2>{title}</h2>
        <p className={s.description}>{shortDescription}</p>
      </Tooltip>
      <Modal isOpen={modalIsOpen}>
      <h2>{title}</h2>
        <p className={s.description}>{longDescription}</p>
        <br />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Event;
