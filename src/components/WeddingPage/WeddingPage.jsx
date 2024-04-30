import Gifts from "../Gifts/Gifts";
import Header from "../Header/Header";
import Church from "../Church/Church";
import Party from "../Party/Party";
import s from "./style.module.css";

const WeddingPage = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header />
        <Church />
        <Party />
        <Gifts />
      </div>
    </div>
  );
};

export default WeddingPage;
