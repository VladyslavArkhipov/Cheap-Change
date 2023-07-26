import { Info } from "./Info";

import { Phone } from "./Phone";
import { Social } from "./Social";
import { Nav } from "../../share/Nav";
import styles from "./Footer.module.css";
import smartphone from "../../assets/images/smartphone.svg";
import bigPhone from "../../assets/images/big_phone.svg";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Info />
      <Nav footer={true} />
      <Phone img={smartphone} number="3773" info="Цілодобова підтримка" />
      <Phone
        img={bigPhone}
        number="8 800 111 22 33"
        info="Безкожтовно для дзвінків в межах України"
      />
      <Social />
    </div>
  );
}
//сделать классы для разных размеров картинок и добавлять их динамически
