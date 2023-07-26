import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import styles from "./Footer.module.css";

const socials = [
  {
    src: facebook,
    width: "9px",
    height: "16px",
  },
  {
    src: instagram,
    width: "16px",
    height: "16px",
  },
  {
    src: twitter,
    width: "16px",
    height: "13px",
  },
  {
    src: youtube,
    width: "16px",
    height: "13px",
  },
];

export function Social() {
  return (
    <div className={styles.social}>
      {socials.map((item) => (
        <img
          style={{ width: item.width, height: item.height }}
          key={item.src}
          src={item.src}
          alt="social network"
        ></img>
      ))}
    </div>
  );
}
