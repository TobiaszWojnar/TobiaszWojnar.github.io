import React, { useContext } from "react";
import Event from "../event/Event.tsx";
import { TimelineContext } from "../timelineApp/TimelineApp.tsx";
import s from "./style.module.css";
import {EventDataType} from '../types.ts';

const Events = ({ events, height }) => {
  const { zoomLvl, startDate } = useContext(TimelineContext);

  const timeSlots = events.reduce((timeSlots:EventDataType[][], e:EventDataType) => {
    const slot = Math.floor((e.year * zoomLvl) / 1000);
    if (!timeSlots[slot]) {
      timeSlots[slot] = [];
    }
    timeSlots[slot].push(e);
    return timeSlots;
  }, []);

  return (
    <div className={s.timeline} style={{ height }}>
      {timeSlots.flatMap((slot:EventDataType[]) =>
        slot.map((e, index) => (
          <Event
            key={e.title}
            label={e.label}
            title={e.title}
            year={e.year}
            icon={e.icon}
            xOffset={((e.year - startDate!) * zoomLvl) / 100}
            yOffset={index}
            color={e.colorSet?`var(--Eras${e.colorSet})`:'auto'}
            shortDescription={e.shortDescription}
            longDescription={e.longDescription}
          />
        ))
      )}
    </div>
  );
};

export default Events;
