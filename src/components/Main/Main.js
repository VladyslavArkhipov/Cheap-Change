import styles from "./Main.module.css";
import backgroundUrl from "../../assets/images/background.svg";
import { MainSection } from "./MainSection";
import card from "../../assets/images/card.svg";
import cardInHand from "../../assets/images/hand_card.svg";

export function Main() {
  return (
    <div className={styles.main}>
      <MainSection
        firstSection={true}
        backgroundUrl={backgroundUrl}
        header="Чіп Чендж"
        mainText="Обмінник валют - навчальний"
        buttonText="Конвертер валют"
        image={card}
        width="341px"
        height="216px"
      />
      <MainSection
        firstSection={false}
        header="Конвертер валют"
        mainText={
          "Переважна діяльність банківської\nгрупи за останні чотири звітні квартали\nстановить 50 і більше відсотків."
        }
        buttonText="Конвертувати валюту"
        image={cardInHand}
        width="436px"
        height="314px"
      />
    </div>
  );
}
