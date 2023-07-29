import convertTo from "../../../assets/images/convert_to.svg";
import styles from "./ConverterHistory.module.css";
export function HistoryItem(props) {
  return (
    <article className={styles.item}>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.value}>
        {props.inputValue} {props.inputCurrency}
      </p>
      <img src={convertTo} alt="convert to"></img>
      <p className={styles.value}>
        {props.outputValue} {props.outputCurrency}
      </p>
    </article>
  );
}
