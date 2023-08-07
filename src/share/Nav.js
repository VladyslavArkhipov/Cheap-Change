import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styles from "./Share.module.css";

export function Nav(props) {
  const menuItems = [
    { label: "Services", path: "/services" },
    { label: "Currency converter", path: "/currency-converter" },
    { label: "Contacts", path: "/contacts" },
    { label: "Ask the question", path: "/ask-question" },
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
