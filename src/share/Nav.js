import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "./Share.module.css";

export function Nav(props) {
  const menuItems = [
    { label: "Послуги", path: "/services" },
    { label: "Конвертер валют", path: "/currency-converter" },
    { label: "Контакти", path: "/contacts" },
    { label: "Задати питання", path: "/ask-question" },
  ];
  const className = props.header ? styles.nav_header : styles.nav_footer;

  return (
    <div className={className}>
      <BrowserRouter>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.label} path={item.path} />
          ))}
        </Routes>
        {menuItems.map((item) => (
          <Link key={item.label} to={item.path}>
            {item.label}
          </Link>
        ))}
      </BrowserRouter>
    </div>
  );
}
