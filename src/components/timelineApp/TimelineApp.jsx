import React from "react";
import Main from "../main/Main";
import Footer from "../footer/Footer";

import s from "./style.module.css";


const TimelineApp = () => {
  return (
    <div className={s.main}>
      <Main/>
      <Footer/>
    </div>
  );
}

export default TimelineApp;