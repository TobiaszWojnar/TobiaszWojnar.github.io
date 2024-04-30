import s from "./style.module.css";

const Location = (props) => {
  return (
    <div className={s.location}>
      <div className={s.cell}>
        <div>{props.name}</div>
        <div>{props.localization}</div>
      </div>
      <div className={s.cell}>
        <iframe title={props.name} src={props.url} loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Location;
