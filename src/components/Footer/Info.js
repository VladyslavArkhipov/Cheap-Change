import { Logo } from "../../share/Logo";
import styles from "./Footer.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <Logo />
      <div className={styles.text}>
        <p>04128, м.Київ, вул. Хрещатик, 19</p>
        <p>Ліцензія НБУ №156</p>
        <p>Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
      </div>
    </div>
  );
}
