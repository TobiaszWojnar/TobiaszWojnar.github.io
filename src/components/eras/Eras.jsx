import React, { useContext } from "react";
import TimePeriod from "../timeperiod/TimePeriod";
import { TimelineContext } from "../timelineApp/TimelineApp";
import s from "./style.module.css";

const Eras = ({ eras, height }) => {
  const { zoomLvl, startDate, endDate } = useContext(TimelineContext);
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
              color={
                e.color ??
                (`var(--Eras${e.colorSet})`?? `var(--Eras1)`)
              }
            />
          ))}
      </div>
  );
};

export default Eras;
