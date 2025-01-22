import React, { useState, useContext } from "react";
import s from "./style.module.css";
import { TimelineContext } from "../timelineApp/TimelineApp.tsx";
import { FocusTrap } from "focus-trap-react";
import classNames from "classnames";

type NavProps = {
  setZoomLvl: (zoomLvl: number) => void;
  setStartDate: (date: number) => void;
  setEndDate: (date: number) => void;
  tagList: string[];
};

const Nav = ({ setZoomLvl, setStartDate, setEndDate, tagList }: NavProps) => {
  const { startDate, endDate, zoomLvl } = useContext(TimelineContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);
  return (
    <FocusTrap
      active={isExpanded}
      focusTrapOptions={{ clickOutsideDeactivates: true }}
    >
      <div className={classNames(s.nav, isExpanded ? s.expanded : s.collapsed)}>
        <div className={s.controls}>
          <button
            className={classNames(
              s.button,
              isExpanded ? s.expanded : s.collapsed
            )}
            onClick={() => setExpanded((s) => !s)}
            aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
            autoFocus
          >
            {isExpanded ? "<" : ">"}
          </button>
        </div>
        {isExpanded && (
          <div className={s.wrapper}>
            <div className={s.title}>Zoom</div>
            <div className={s.controls}>
              <button
                className={s.button}
                // @ts-expect-error @typescript-eslint/no-unsafe-argument
                onClick={() => setZoomLvl((curr) => curr * 1.25)}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                className={s.button}
                // @ts-expect-error @typescript-eslint/no-unsafe-argument
                onClick={() => setZoomLvl((curr) => (curr as number) * 0.8)}
                aria-label="Zoom out"
                disabled={zoomLvl < 64}
              >
                -
              </button>
            </div>
          </div>
        )}
        {isExpanded && (
          <div className={s.wrapper}>
            <div className={s.title}>Time period</div>
            <div className={s.controls}>
              <input
                type="number"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(Number(e.target.value))}
                max={2000}
              />
              <input
                type="number"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(Number(e.target.value))}
                max={2030}
              />
            </div>
          </div>
        )}
        {isExpanded && tagList && (
          <div className={s.wrapper}>
            <div className={s.title}>Tags</div>
            <div className={s.list}>{tagList.join(", ")}</div>
          </div>
        )}
      </div>
    </FocusTrap>
  );
};

export default Nav;
