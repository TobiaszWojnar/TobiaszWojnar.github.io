import React, { useState, useEffect, useRef } from "react";
import * as Papa from "papaparse";
import Timeline from "../timeline/Timeline";
import TimelinePeriods from "../timeline/TimelinePeriods";
import Nav from "../nav/Nav";
// import events from "./../../data/events.csv";
import polishKings from "./../../data/polish_kings.csv";
import usPresidents from "./../../data/us_presidents.csv";
import overview from "./../../data/overview.csv";
import s from "./style.module.css";

const Main = () => {
  const [eventsData, setEventsData] = useState([]);
  const [zoomLvl, setZoomLvl] = useState(100);
  const [startDate, setStartDate] = useState(1025);
  const [endDate, setEndDate] = useState(2000);

  const ARROW_KEY_MOVE_OFFSET = 50;

  const wrapperRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    const fetchAndMergeCSVData = async (csvFiles) => {
      const promises = csvFiles.map(async (csvFile) => {
        try {
          const response = await fetch(csvFile);
          const reader = response.body.getReader();
          const result = await reader.read();
          const decoder = new TextDecoder("utf-8");
          const csvData = decoder.decode(result.value);

          const parsedData = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
          }).data.map((e) => {
            return { ...e, tags: e.tags.split(",").map((tag) => tag.trim()) };
          });

          return parsedData;
        } catch (error) {
          console.error(`Error fetching data from ${csvFile}:`, error);
        }
      });

      const allData = await Promise.all(promises);
      setEventsData([].concat(...allData));
    };

    fetchAndMergeCSVData([polishKings, usPresidents, overview]);
  }, []);

  useEffect(() => {
    setStartDate(
      Math.min(...eventsData.map((e) => Number(e.year))),
      startDate ? startDate : Infinity
    );
    setEndDate(
      Math.max(...eventsData.map((e) => Number(e.year))),
      endDate ? endDate : -Infinity
    );
  }, [eventsData]);

  return (
    <main className={s.main}>
      <div className={s.nav}>
        <Nav
          zoomLvl={zoomLvl}
          setZoomLvl={setZoomLvl}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>

      <div
        className={s.timelines_wrapper}
        ref={wrapperRef}
        onWheel={handleWheel}
        onKeyDown={handleKey}
      >
        <div className={s.timelines}>
          <TimelinePeriods
            // events={eventsData.filter((e) => e.tags.includes("poland"))}
            zoomLvl={zoomLvl}
            startDate={startDate}
            endDate={endDate}
          />
          <Timeline
            events={eventsData.filter((e) => e.tags.includes("poland"))}
            zoomLvl={zoomLvl}
            startDate={startDate}
            endDate={endDate}
          />
          <Timeline
            events={eventsData.filter((e) => e.tags.includes("main"))}
            zoomLvl={zoomLvl}
            startDate={startDate}
            endDate={endDate}
          />
          <Timeline
            events={eventsData.filter((e) => e.tags.includes("usa"))}
            zoomLvl={zoomLvl}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
