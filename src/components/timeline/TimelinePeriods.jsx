import React from "react";
import TimePeriod from "../timePeriod/TimePeriod";
import s from "./style.module.css";

const TimelinePeriods = ({ zoomLvl, startDate, endDate }) => {
  const colorPallet1 = ['rgb(24, 78, 119)','rgb(30, 96, 145)','rgb(26, 117, 159)','rgb(22, 138, 173)']; //["#184e77", "#1e6091", "#1a759f", "#168aad"];
  const colorPallet2 = ['rgb(55, 6, 23)','rgb(106, 4, 15)','rgb(157, 2, 8)','rgb(208, 0, 0)'];//["#ff6d00", "#ff7900", "#ff8500", "#ff9100"];
  const events = [
    {
      title: "Średniowiecze",
      startDate: 476,
      endDate: 1490,
      color: colorPallet1[0],
    },
    {
      title: "Renesans",
      startDate: 1490,
      endDate: 1580,
      color: colorPallet2[0],
    },
    {
      title: "Barok",
      startDate: 1580,
      endDate: 1750,
      color: colorPallet1[1],
    },
    {
      title: "Oświecenie",
      startDate: 1750,
      endDate:  1822,
      color: colorPallet2[1],
    },
    {
      title: "Romantyzm",
      startDate: 1822,
      endDate: 1863,
      color: colorPallet1[2],
    },
    {
      title: "Pozytywizm",
      startDate: 1864,
      endDate: 1890,
      color: colorPallet2[2],
    },
    {
      title: "Młoda Polska",
      startDate: 1891,
      endDate: 1918,
      color: colorPallet1[3],
    },
    {
      title: "20-lecie Międzywojenne",
      startDate: 1918,
      endDate: 1939,
      color: colorPallet2[3],
    },
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.timeline}>
        {events.map((e) => (
          <TimePeriod
            key={e.title}
            title={e.title}
            xOffset={
              Math.max(e.startDate - startDate, 0) * zoomLvl / 100
            }
            widthH={(e.endDate-Math.max(e.startDate,startDate)) * zoomLvl / 100}
            color={e.color}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelinePeriods;
