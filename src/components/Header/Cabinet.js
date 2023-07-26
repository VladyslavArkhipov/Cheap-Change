import cabinetIcon from "../../assets/images/cabinet.svg";
import styles from "./Header.module.css";
export function Cabinet() {
  const name = "Особистий кабінет";
  return (
    <div className={styles.cabinet}>
      <img src={cabinetIcon} alt="Cabinet icon" />
      <p>{name}</p>
    </div>
  );
}
//Передалеть экспорты с дефолт на обычные
