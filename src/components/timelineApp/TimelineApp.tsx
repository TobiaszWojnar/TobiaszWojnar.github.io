import React, { useState, useEffect, createContext } from "react";
import Modal from "react-modal";

import Nav from "../nav/Nav.tsx";
import Timeline from "../timeline/Timeline.tsx";
import s from "./style.module.css";
import {
  EventDataType,
  TimePeriodDataType,
  TimelineContextType,
  ModalContextType,
} from "../types";

import * as Papa from "papaparse"; // @ts-expect-error TODOs
import polishKings from "./../../data/polish_kings.csv"; // @ts-expect-error TODOs
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
  modalContent: null,
  setModalContent: () => {},
});

const TimelineApp = () => {
  const [eventsData, setEventsData] = useState<EventDataType[]>([]);
  const [erasData, setErasData] = useState<TimePeriodDataType[]>([]);
  const [zoomLvl, setZoomLvl] = useState<number>(DEFAULT_ZOOM_LVL);
  const [startDate, setStartDate] = useState<number>();
  const [endDate, setEndDate] = useState<number>();
  const [tags, setTags] = useState<string[]>([]);
  const [modalContent, setModalContent] = useState();

  useEffect(() => {
    const fetchAndMergeCSVData = async (
      csvFiles: [],
      setData: (data: EventDataType[] | TimePeriodDataType[]) => {},
      setMinDate?: (minDate: number) => {},
      setMaxDate?: (maxDate: number) => {},
      setTagList?: (tags: string[]) => {}
    ) => {
      const promises = csvFiles.map(async (csvFile) => {
        try {
          const response = await fetch(csvFile);
          const reader = response.body?.getReader();
          const result = await reader?.read();
          const decoder = new TextDecoder("utf-8");
          const csvData = decoder.decode(result?.value);

          const parsedData = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header: string) => header.trim(),
          }).data.map((e: any) => {
            return {
              ...Object.fromEntries(
                Object.entries(e).map(([key, value]) => [
                  key,
                  (value as string).trim(),
                ])
              ),
              tags: e.tags.split(",").map((tag: string) => tag.trim()),
            };
          });

          return parsedData;
        } catch (error) {
          console.error(`Error fetching data from ${csvFile}:`, error);
        }
      });

      const allData = (await Promise.all(promises)) as (
        | EventDataType[]
        | TimePeriodDataType[]
      )[];
      // @ts-expect-error TODOs
      setData(allData.flat());

      if (setMinDate && setMaxDate) {
        setMinDate(
          Math.min(
            ...allData.flat().map((e) => Number((e as EventDataType).year))
          )
        );
        setMaxDate(
          Math.max(
            ...allData.flat().map((e) => Number((e as EventDataType).year))
          )
        );
      }
      if (setTagList) {
        setTagList(
          Array.from(
            new Set(
              allData
                .flat()
                .map((e) => e.tags)
                .flat()
            )
          ).sort()
        );
      }
    };

    fetchAndMergeCSVData(
      // @ts-expect-error TODOs
      [polishKings, usPresidents, peopleMain],
      setEventsData,
      setStartDate,
      setEndDate,
      setTags
    );
    // @ts-expect-error TODOs
    fetchAndMergeCSVData([eras], setErasData); // Runs twice in strict mode
  }, []);

  return (
    <TimelineContext.Provider value={{ zoomLvl, startDate, endDate }}>
      <ModalContext.Provider value={{ modalContent, setModalContent }}>
        <main className={s.main}>
          {/*  // @ts-expect-error TODOs */}
          <Modal isOpen={modalContent ?? false}>{modalContent}</Modal>
          <Timeline events={eventsData} eras={erasData} />
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
