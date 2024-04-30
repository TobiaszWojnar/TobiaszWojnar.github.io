import s from "./style.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <h1>Róża</h1>
      <p>&</p>
      <h1>Tobiasz</h1>
      <p>z radością zapraszają na &nbsp;<b>ślub</b></p>
    </div>
  );
};

export default Header;
