import { Logo } from "../../share/Logo";
import styles from "./Footer.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <Logo />
      <div className={styles.text}>
        <p>04128, Kyiv, st. Khreschatyk, 19</p>
        <p>NBU license #156</p>
        <p>Ⓒ PJSC CheapChange, 2019-2023</p>
      </div>
    </div>
  );
}
