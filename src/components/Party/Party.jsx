import Location from "../Location/Location";
import Date from "../Date/Date";
import Or from "../Or/Or";
import s from "./style.module.css";

const Party = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        Chcielibyśmy dalej z wami świętować, dlatego zapraszamy zgodnie z
        treścią waszego zaproszenia na:
        <div className={s["wedding-ceremony"]}>
          <h3>Przyjęcie weselne</h3> <p>Który odbędzie się</p>
          <Date day="Sobota" date="12 X 2024" hour="16:00" />
          <Location
            name={"Dom Błękitnego Krzyża im. Matki Ewy"}
            localization="Paderewskiego 3. Pszczyna"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.3249622119399!2d18.937426069674316!3d49.98698756049809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ba8d04655a4f%3A0x4a7dca8a9ef5daca!2sPaderewskiego%203%2C%2043-200%20Pszczyna!5e0!3m2!1sen!2spl!4v1714481398032!5m2!1sen!2spl"
          />
        </div>
        <Or />
        <div className={s["grill"]}>
          <h3>Weselnego grilla</h3>
          <p>Który odbędzie się</p>
          <Date day="Sobota" date="19 X 2024" hour="15:00" />
          <Location
            name={"Dom rodzinny Tobiasza"}
            localization="Dzwonkowa 15A. Jaworze"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.2786755474674!2d18.9666918455389!3d49.80325103628068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a0f5ca79cf0d%3A0x75c3fe6fb241e438!2sDzwonkowa%2015A%2C%2043-384%20Jaworze!5e0!3m2!1sen!2spl!4v1714481600169!5m2!1sen!2spl&zoom=20"
          />
        </div>
      </div>
    </div>
  );
};

export default Party;
