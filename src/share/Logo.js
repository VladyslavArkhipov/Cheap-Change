import logo from "../assets/images/logo.svg";
import styles from "./Share.module.css";
export function Logo() {
  const name = "Cheap Change";

  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <h2>{name}</h2>
    </div>
  );
}
