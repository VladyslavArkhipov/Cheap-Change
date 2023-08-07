import styles from "./Converter.module.css";

export function SaveButton({ updateSavedResults, data }) {
  const saveResultHandler = (e) => {
    e.preventDefault();
    const newResult = data;

    updateSavedResults(newResult);
  };
  return (
    <article className={styles.btn_wrapper}>
      <a href="/" onClick={saveResultHandler} className={styles.button}>
        Save the result
      </a>
    </article>
  );
}
