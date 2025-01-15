import React, { useRef, useContext } from "react";
import { TimelineContext } from "../timelineApp/TimelineApp";
import Events from "../events/Events";
import Eras from "../eras/Eras";
import Line from "../line/Line";
import s from "./style.module.css";

export const HORIZONTAL_OFFSET = 50;

const Timeline = ({ events, eras }) => {
  const wrapperRef = useRef(null);
  const { zoomLvl } = useContext(TimelineContext);
  const ARROW_KEY_MOVE_OFFSET = zoomLvl / 2;

  const handleWheel = (e) => {
    // e.preventDefault();
    wrapperRef.current.scrollLeft += e.deltaY;
  };
  const handleKey = (e) => {
    switch (e.key) {
      case "ArrowRight":
        wrapperRef.current.scrollLeft += ARROW_KEY_MOVE_OFFSET;
        break;
      case "ArrowLeft":
        wrapperRef.current.scrollLeft -= ARROW_KEY_MOVE_OFFSET;
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={s.timelines}
      ref={wrapperRef}
      onWheel={handleWheel}
      onKeyDown={handleKey}
    >
      <Eras eras={eras} height={"10em"} />
      <Line showDates="up" />
      <Events
        events={events}
        filters={{ include: ["main"], exclude: ["usa", "science"] }} //TODO useMemo?
        height={"5em"}
      />
      <Events
        events={events}
        filters={{ include: ["main", "science"], exclude: ["usa"] }}
        height={"6em"}
      />
      <Line />
      <Events
        events={events}
        filters={{ include: ["usa", "president"] }}
        height={"4em"}
      />
      <Events
        events={events}
        filters={{ include: ["usa"], exclude: ["president"] }}
        height={"8em"}
      />
      <Line />
      <Events
        events={events}
        filters={{ include: ["poland", "kings"] }}
        height={"4em"}
      />
      <Events
        events={events}
        filters={{ include: ["poland"], exclude: ["kings"] }}
        height={"6em"}
      />
    </div>
  );
};

export default Timeline;
