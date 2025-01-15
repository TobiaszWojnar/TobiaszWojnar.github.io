import React, { useState, useEffect, createContext } from "react";
import Modal from "react-modal";

import Nav from "../nav/Nav";
import Timeline from "../timeline/Timeline";
import s from "./style.module.css";

import * as Papa from "papaparse";
import polishKings from "./../../data/polish_kings.csv";
import usPresidents from "./../../data/us_presidents.csv";
import peopleMain from "./../../data/people_main.csv";
import eras from "./../../data/eras.csv";

export const TimelineContext = createContext(null);
export const ModalContext = createContext(null);

const TimelineApp = () => {
  const [eventsData, setEventsData] = useState([]);
  const [erasData, setErasData] = useState([]);
  const [zoomLvl, setZoomLvl] = useState(250);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    const fetchAndMergeCSVData = async (
      csvFiles,
      setData,
      setMinDate,
      setMaxDate
    ) => {
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
            transformHeader: (header) => header.trim(),
          }).data.map((e) => {
            return {
              ...Object.fromEntries(
                Object.entries(e).map(([key, value]) => [key, value.trim()])
              ),
              tags: e.tags.split(",").map((tag) => tag.trim()),
            };
          });

          return parsedData;
        } catch (error) {
          console.error(`Error fetching data from ${csvFile}:`, error);
        }
      });

      const allData = await Promise.all(promises);
      setData(allData.flat());

      if (setMinDate && setMaxDate) {
        setMinDate(Math.min(...allData.flat().map((e) => Number(e.year))));
        setMaxDate(Math.max(...allData.flat().map((e) => Number(e.year))));
      }
    };

    fetchAndMergeCSVData(
      [polishKings, usPresidents, peopleMain],
      setEventsData,
      setStartDate,
      setEndDate
    );
    fetchAndMergeCSVData([eras], setErasData);
    console.log("fetchAndMergeCSVData"); // TODO why runs twice
  }, []);

  return (
    <TimelineContext.Provider value={{ zoomLvl, startDate, endDate }}>
      <ModalContext.Provider
        value={{ isModalOpen, setModalOpen, setModalContent }}
      >
        <main className={s.main}>
          <Modal isOpen={isModalOpen}>{modalContent}</Modal>
          <Timeline events={eventsData} eras={erasData} />
        </main>
        <div className={s.nav}>
          <Nav
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setZoomLvl={setZoomLvl}
          />
        </div>
      </ModalContext.Provider>
    </TimelineContext.Provider>
  );
};

export default TimelineApp;
