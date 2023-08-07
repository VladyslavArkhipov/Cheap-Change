import cabinetIcon from "../../assets/images/cabinet.svg";
import styles from "./Header.module.css";
export function Cabinet() {
  const name = "Personal office";
  return (
    <div className={styles.cabinet}>
      <img src={cabinetIcon} alt="Cabinet icon" />
      <p>{name}</p>
    </div>
  );
}
