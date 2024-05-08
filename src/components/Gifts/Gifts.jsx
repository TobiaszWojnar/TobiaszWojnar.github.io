import s from "./style.module.css";
import Or from "../Or/Or";

const Gifts = () => {
  return (
    <div className={s.gifts}>
      <h2>Prezenty</h2>
      Zamiast kwiatów prosimy o darowiznę na budowę ośrodka Fundacji Błękitny
      Krzyż lub Centrum Chrześcijańskiego Nowe Betlejem.
      <div className={s.donation}>
        <div> Śląska Fundacja Błękitny Krzyż</div>
        <div> Mostowa 1, 43-300 Bielsko-Biała</div>
        <div> 02 8111 0009 2001 0034 8519 0020 </div>
        <div> „Scementujmy się”</div>
      </div>
      <Or />
      <div className={s.donation}>
        <div> Kościół Zielonoświątkowy Zbór Betlejem w Krakowie</div>
        <div> ul. Wodna 16 30-556 Kraków </div>
        <div> 24 1020 2892 0000 5202 0400 6607 </div>
        <div> lub blikiem 518 484 741</div>
        <div> „Nowe Betlejem”</div>
      </div>


      Będzie nam również niezwykle miło, jeśli zamiast prezentów zdecydujecie się na symboliczną kopertę.
      Pomoże nam to w realizacji wspólnych planów.
    </div>
  );
};

export default Gifts;
