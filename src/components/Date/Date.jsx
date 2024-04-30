import s from "./style.module.css";

const Date = (props) => {
  return (
    <div className={s.grid}>
      <div className={s.cell}>{props.day}</div>
      <div className={s.separator}></div>
      <div className={s.cell}>{props.date} </div>
      <div className={s.separator}></div>
      <div className={s.cell}>{props.hour}</div>
    </div>
  );
};

export default Date;
