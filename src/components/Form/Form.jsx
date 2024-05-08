import s from "./style.module.css";

const Form = (props) => {
  return (
    <div className={s.form}>
        <iframe
        title={props.title}
          src={props.url} loading="lazy"
            frameborder="0"
          />
    </div>
  );
};

export default Form;
