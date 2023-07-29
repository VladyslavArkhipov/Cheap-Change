import { BrowserRouter, Link } from "react-router-dom";

import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import styles from "./Footer.module.css";

const socials = [
  {
    name: "Facebook",
    src: facebook,
    width: "9px",
    height: "16px",
    link: "https://www.facebook.com/", // Замените этот URL на соответствующую страницу Facebook
  },
  {
    name: "Instagram",
    src: instagram,
    width: "16px",
    height: "16px",
    link: "https://www.instagram.com/", // Замените этот URL на соответствующую страницу Instagram
  },
  {
    name: "Twitter",
    src: twitter,
    width: "16px",
    height: "13px",
    link: "https://twitter.com/", // Замените этот URL на соответствующую страницу Twitter
  },
  {
    name: "YouTube",
    src: youtube,
    width: "16px",
    height: "13px",
    link: "https://www.youtube.com/", // Замените этот URL на соответствующую страницу YouTube
  },
];

export function Social() {
  return (
    <div className={styles.social}>
      <BrowserRouter>
        {socials.map((item) => (
          <Link to={item.link} key={item.name}>
            <img
              style={{ width: item.width, height: item.height }}
              src={item.src}
              alt={`social network - ${item.name}`}
            />
          </Link>
        ))}
      </BrowserRouter>
    </div>
  );
}
