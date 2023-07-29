import styles from "./Converter.module.css";
import select from "../../../assets/images/select.svg";
export function Select({ onChange, value }) {
  return (
    <select
      className={styles.select}
      style={{ backgroundImage: `url(${select})` }}
      onChange={onChange}
      value={value}
    >
      <option value="EUR">EUR</option>
      <option value="UAH">UAH</option>
      <option value="USD">USD</option>
    </select>
  );
}
