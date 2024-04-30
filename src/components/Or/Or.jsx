import s from "./style.module.css";

const Or = () => {
  return (
    <div className={s["line-container"]}>
      <div className={s.line} />
      <span className={s.text}>Lub</span>
      <div className={s.line} />
    </div>
  );
};

export default Or;
