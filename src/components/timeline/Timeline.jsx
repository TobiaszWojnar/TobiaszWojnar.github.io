import React, { useRef, useContext, useMemo } from "react";
import { TimelineContext } from "../timelineApp/TimelineApp";
import Events from "../events/Events";
import Eras from "../eras/Eras";
import Line from "../line/Line";
import s from "./style.module.css";

export const HORIZONTAL_OFFSET = 50;

const Timeline = ({ events, eras }) => {
  const { zoomLvl, startDate, endDate } = useContext(TimelineContext);
  const ARROW_KEY_MOVE_OFFSET = zoomLvl / 2;
  const wrapperRef = useRef(null);

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

  const filterByTags = (events, filters) =>
    events
      .filter(
        (e) =>
          !filters.exclude ||
          filters.exclude.length === 0 ||
          !filters.exclude.some((tag) => e.tags.includes(tag))
      )
      .filter(
        (e) =>
          !filters.includeEvery ||
          filters.includeEvery?.length === 0 ||
          filters.includeEvery.every((tag) => e.tags.includes(tag))
      )
      .filter(
        (e) =>
          !filters.includeSome ||
          filters.includeSome?.length === 0 ||
          filters.includeSome.some((tag) => e.tags.includes(tag))
      );
  const filterByTime = (events) =>
    events.filter(
      (e) => startDate <= e.year + zoomLvl && e.year - zoomLvl <= endDate
    );

  const polishLeaders = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["poland"],
        includeSome: ["king", "president"],
        exclude: ["science"],
      }),
    [events]
  );
  const polishScience = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["poland", "science"],
        exclude: ["king", "president"],
      }),
    [events]
  );
  const polishNonLeaders = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["poland"],
        exclude: ["king", "president", "science"],
      }),
    [events]
  );
  const usaLeaders = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["usa"],
        includeSome: ["king", "president"],
        exclude: ["science"],
      }),
    [events]
  );
  const usaNonLeaders = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["usa"],
        exclude: ["king", "president", "science"],
      }),
    [events]
  );
  const usaScience = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["usa", "science"],
        exclude: ["king", "president"],
      }),
    [events]
  );
  const mainLeaders = useMemo(
    () =>
      filterByTags(events, {
        exclude: ["usa", "poland", "science"],
        includeSome: ["king", "president"],
      }),
    [events]
  );
  const mainScience = useMemo(
    () =>
      filterByTags(events, {
        includeEvery: ["science"],
        exclude: ["usa", "poland", "king", "president"],
      }),
    [events]
  );
  const mainNonLeaders = useMemo(
    () =>
      filterByTags(events, {
        exclude: ["usa", "poland", "king", "president", "science"],
      }),
    [events]
  );

  return (
    <div
      className={s.timelines}
      ref={wrapperRef}
      onWheel={handleWheel}
      onKeyDown={handleKey}
    >
      <Eras eras={eras} height={"10em"} />
      <Line showDates="up" />
      <Events events={filterByTime(mainLeaders)} height={"3em"} />
      <Events events={filterByTime(mainNonLeaders)} height={"3em"} />
      <Events events={filterByTime(mainScience)} height={"6em"} />
      <Line />
      <Events events={filterByTime(usaLeaders)} height={"4em"} />
      <Events events={filterByTime(usaNonLeaders)} height={"3em"} />
      <Events events={filterByTime(usaScience)} height={"6em"} />
      <Line />
      <Events events={filterByTime(polishLeaders)} height={"3em"} />
      <Events events={filterByTime(polishNonLeaders)} height={"3em"} />
      <Events events={filterByTime(polishScience)} height={"6em"} />
    </div>
  );
};

export default Timeline;
