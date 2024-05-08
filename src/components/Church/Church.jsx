import Location from "../Location/Location";
import Date from "../Date/Date";
import s from "./style.module.css";

const Church = () => {
  return (
    <div className={s.container}>
      <h2>Ślub</h2>
      <div className={s.church}>
        <Date day="Sobota" date="12 X 2024" hour="14:00" />
        <Location
          name={"Kościół Ewangelicki w Pszczynie"}
          localization="Rynek 1. Pszczyna"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1246.362444176047!2d18.94135594405658!3d49.97822958190367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716bae81194c5af%3A0xec55e0a8bcf07de2!2sKo%C5%9Bci%C3%B3%C5%82%20Ewangelicko-Augsburski%20w%20Pszczynie!5e0!3m2!1sen!2spl!4v1714480783724!5m2!1sen!2spl"
        />
      </div>
    </div>
  );
};

export default Church;
