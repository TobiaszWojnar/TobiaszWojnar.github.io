import React from "react";
import Event from "../event/Event";
import s from "./style.module.css";

const Timeline = ({ events, zoomLvl, startDate, endDate, isModalOpen, setModalOpen, setModalContent}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.timeline}>
        <div
          className={s.line}
          style={{
            width: ((endDate - startDate + 100) * zoomLvl) / 100 + "px",
          }}
        />
        {events.map((e) => (
          <Event
            key={e.title}
            label={e.label}
            title={e.title}
            icon={e.icon}
            xOffset={((e.year - startDate + 50) * zoomLvl) / 100}
            color={e.color}
            shortDescription={e.shortDescription}
            longDescription={e.longDescription}
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
            setModalContent={setModalContent}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
