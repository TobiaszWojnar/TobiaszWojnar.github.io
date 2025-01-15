import React, { useContext } from "react";
import Event from "../event/Event";
import { TimelineContext } from "../timelineApp/TimelineApp";
import s from "./style.module.css";

const Events = ({ events, filters, height }) => {
  const { zoomLvl, startDate, endDate } = useContext(TimelineContext);
  const filteredEvents = events
    .filter((e) => startDate <= e.year + zoomLvl && e.year - zoomLvl <= endDate) // filter events outside of rendered area
    .filter(
      (e) =>
        filters.include?.length === 0 ||
        filters.include.every((tag) => e.tags.includes(tag))
    )
    .filter(
      (e) =>
        !filters.exclude ||
        filters.exclude.length === 0 ||
        !filters.exclude.some((tag) => e.tags.includes(tag))
    );

  const timeSlots = filteredEvents.reduce((timeSlots, e) => {
    const slot = Math.floor((e.year * zoomLvl) / 1000);
    if (!timeSlots[slot]) {
      timeSlots[slot] = [];
    }
    timeSlots[slot].push(e);
    return timeSlots;
  }, []);

  return (
    <div className={s.timeline} style={{ height }}>
      {timeSlots.flatMap((slot) =>
        slot.map((e, index) => (
          <Event
            key={e.title}
            label={e.label}
            title={e.title}
            year={e.year}
            icon={e.icon}
            xOffset={((e.year - startDate) * zoomLvl) / 100}
            yOffset={index}
            color={e.color}
            shortDescription={e.shortDescription}
            longDescription={e.longDescription}
          />
        ))
      )}
    </div>
  );
};

export default Events;
