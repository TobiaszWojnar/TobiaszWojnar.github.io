import React, { useContext } from "react";
import classNames from "classnames";
import { TimelineContext } from "../timelineApp/TimelineApp.tsx";
import s from "./style.module.css";
import { HORIZONTAL_OFFSET } from "../timeline/Timeline.tsx";

type LineProps = { color?: string; showDates?: "up" | "down" | "none" };

const Line = ({ color, showDates = "none" }: LineProps) => {
  const { zoomLvl, startDate, endDate }: any = useContext(TimelineContext);
  if (
    zoomLvl === undefined ||
    startDate === undefined ||
    endDate === undefined
  ) {
    return null; // Stop rendering if any dependency is undefined
  }

  const lineWidth = ((endDate - startDate + 100) * zoomLvl) / 100;
  const start = Math.ceil(startDate / 100);
  const end = Math.ceil(endDate / 100);

  let markers = [...Array(end - start).keys()]
    .map((m) => m + start)
    .map((century) => (
      <div
        key={century * 100}
        className={s.marker_wrapper}
        style={{
          left:
            ((century * 100 - startDate) * zoomLvl) / 100 +
            HORIZONTAL_OFFSET +
            "px",
        }}
      >
        <div className={s.marker} />
        <p
          className={classNames(s.year, showDates === "up" ? s.up : s.down)}
          hidden={showDates === "none"}
        >
          <b>{century * 100}</b>
        </p>
      </div>
    ));
  return (
    <div className={classNames(s.timeline, s.line_wrapper)}>
      <div
        className={s.line}
        style={{
          width: lineWidth + HORIZONTAL_OFFSET + "px",
          backgroundColor: color ?? "black",
        }}
      />
      {markers}
    </div>
  );
};

export default Line;
