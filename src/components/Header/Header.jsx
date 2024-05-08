import s from "./style.module.css";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Róża</h1>
        <p>&</p>
        <h1>Tobiasz</h1>
      </div>
    </div>
  );
};

export default Header;
