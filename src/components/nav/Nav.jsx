import React, { useState, useContext } from "react";
import s from "./style.module.css";
import { TimelineContext } from "../timelineApp/TimelineApp";
import { FocusTrap } from "focus-trap-react";
import classNames from "classnames";

const Nav = ({ setZoomLvl, setStartDate, setEndDate, tagList }) => {
  const { startDate, endDate, zoomLvl } = useContext(TimelineContext);
  const [isExpanded, setExpanded] = useState(false);
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
                onClick={() => setZoomLvl((curr) => curr * 1.25)}
              >
                +
              </button>
              <button
                className={s.button}
                onClick={() => setZoomLvl((curr) => curr * 0.8)}
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
                onChange={(e) => setStartDate(e.target.value)}
                max={2000}
              />
              <input
                type="number"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                max={2030}
              />
            </div>
          </div>
        )}
        {isExpanded && tagList && (
          <div className={s.wrapper}>
            <div className={s.title}>Tags</div>
            <div className={s.list}>{tagList.join(', ')}</div>
          </div>
        )}
      </div>
    </FocusTrap>
  );
};

export default Nav;
