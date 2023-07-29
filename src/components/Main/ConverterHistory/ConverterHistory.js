import styles from "./ConverterHistory.module.css";

import { HistoryItem } from "./HistoryItem";
export function ConverterHistory({ savedResults, clearHistory }) {
  const handleClearHistory = () => {
    clearHistory();
  };

  return (
    <section className={styles.converter_history}>
      <article className={styles.wrapper}>
        <article className={styles.header_block}>
          <h4 className={styles.header}>Історія конвертації</h4>
          <button onClick={handleClearHistory} className={styles.button}>
            Очистити історію
          </button>
        </article>
        <article className={styles.history}>
          {savedResults.map((result, index) => (
            <HistoryItem
              key={index}
              date={result.date}
              inputValue={result.input?.value}
              inputCurrency={result.input?.currency}
              outputValue={result.output?.value}
              outputCurrency={result.output?.currency}
            />
          ))}
        </article>
      </article>
    </section>
  );
}
