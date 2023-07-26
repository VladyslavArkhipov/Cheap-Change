import { Logo } from "../../share/Logo";
import { Nav } from "../../share/Nav";
import { Cabinet } from "./Cabinet";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav header={true} />
      <Cabinet />
    </div>
  );
}
//Переделать стили на модули
