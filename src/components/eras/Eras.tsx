import React, { useContext } from "react";
import TimePeriod from "../timeperiod/TimePeriod.tsx";
import { TimelineContext } from "../timelineApp/TimelineApp.tsx";
import s from "./style.module.css";
import { TimePeriodDataType } from "../types";

type ErasType = {
  eras: TimePeriodDataType[];
  height: string;
};

const Eras = ({ eras, height }: ErasType) => {
  const { zoomLvl, startDate, endDate } = useContext(TimelineContext);
  if (!startDate || !endDate) {
    return null;
  }
  return (
    <div className={s.timeline} style={{ height }}>
      {eras
        .filter((e) => !(endDate <= e.startDate || e.endDate <= startDate))
        .map((e) => (
          <TimePeriod
            key={e.title}
            title={e.title}
            label={e.label}
            xOffset={(Math.max(e.startDate - startDate, 0) * zoomLvl) / 100}
            widthH={
              ((e.endDate - Math.max(e.startDate, startDate)) * zoomLvl) / 100
            }
            color={`var(--Eras${e.colorSet ?? 1})`}
          />
        ))}
    </div>
  );
};

export default Eras;
