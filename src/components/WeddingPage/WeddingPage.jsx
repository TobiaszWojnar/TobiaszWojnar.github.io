import Gifts from "../Gifts/Gifts";
import Header from "../Header/Header";
import Church from "../Church/Church";
import Countdown from "../Countdown/Countdown"
import Party from "../Party/Party";
import Footer from "../Footer/Footer";
import s from "./style.module.css";

const WeddingPage = () => {
  return (
    <div className={s.root}>
        <Header />
        <Church />
        <Countdown />
        <Party />
        <Gifts />
        <Footer />
    </div>
  );
};

export default WeddingPage;
