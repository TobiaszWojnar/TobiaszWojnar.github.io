import React, { useState, createContext, useEffect } from "react";
import useFetchCSV from "../useFetchCSV.ts";
import Modal from "react-modal";
import DetailedView from "../detailedView/DetailedView.tsx";
import Nav from "../nav/Nav.tsx";
import Timeline from "../timeline/Timeline.tsx";
import s from "./style.module.css";
import {
  TimelineContextType,
  ModalContextType,
} from "../types";

// @ts-expect-error TODOs
import polishKings from "./../../data/polish_kings.csv"; // @ts-expect-error TODOs
import polishPresidents from "./../../data/polish_presidents.csv"; // @ts-expect-error TODOs
import usPresidents from "./../../data/us_presidents.csv"; // @ts-expect-error TODOs
import peopleMain from "./../../data/people_main.csv"; // @ts-expect-error TODOs
import eras from "./../../data/eras.csv";

const DEFAULT_ZOOM_LVL = 250;
export const TimelineContext = createContext<TimelineContextType>({
  zoomLvl: DEFAULT_ZOOM_LVL,
  startDate: 0,
  endDate: 0,
});
export const ModalContext = createContext<ModalContextType>({
  detailedView: null,
  setDetailedView: () => {},
});

const TimelineApp = () => {
  const [zoomLvl, setZoomLvl] = useState<number>(DEFAULT_ZOOM_LVL);
  const [startDate, setStartDate] = useState<number>();
  const [endDate, setEndDate] = useState<number>();
  const [detailedView, setDetailedView] = useState();
  Modal.setAppElement("#root");

  const { eventsData, timePeriodsData, tags, minDate, maxDate } = useFetchCSV(
    [polishKings, usPresidents, peopleMain, polishPresidents],
    [eras]
  );
  useEffect(()=>{
    setStartDate(minDate!);
  },[minDate])
  useEffect(()=>{
    setEndDate(maxDate!);
  },[maxDate])

  return (
    <TimelineContext.Provider value={{ zoomLvl, startDate, endDate }}>
      <ModalContext.Provider value={{ detailedView, setDetailedView }}>
        <main className={s.main}>
          <DetailedView content={detailedView} setContent={setDetailedView} />
          <Timeline events={eventsData} timePeriods={timePeriodsData} />
        </main>
      </ModalContext.Provider>
      <div className={s.nav}>
        <Nav
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setZoomLvl={setZoomLvl}
          tagList={tags}
        />
      </div>
    </TimelineContext.Provider>
  );
};

export default TimelineApp;
