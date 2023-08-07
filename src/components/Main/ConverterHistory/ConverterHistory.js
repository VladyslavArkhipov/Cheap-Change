import styles from "./ConverterHistory.module.css";

import { HistoryItem } from "./HistoryItem";
export function ConverterHistory({ savedResults, clearHistory }) {
  const handleClearHistory = (e) => {
    e.preventDefault();
    clearHistory();
  };

  return (
    <section className={styles.converter_history}>
      <article className={styles.wrapper}>
        <article className={styles.header_block}>
          <h4 className={styles.header}>Conversion history</h4>
          <a href="/" onClick={handleClearHistory} className={styles.button}>
            Clear history
          </a>
        </article>
        <article className={styles.history}>
          {savedResults.length < 8
            ? savedResults.map((result, index) => (
                <HistoryItem
                  key={index}
                  date={result.date}
                  inputValue={result.input?.value}
                  inputCurrency={result.input?.currency}
                  outputValue={result.output?.value}
                  outputCurrency={result.output?.currency}
                />
              ))
            : savedResults
                .slice(0, 8)
                .map((result, index) => (
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
