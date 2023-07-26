import styles from "./Main.module.css";
export function Converter(props) {
  const headerClassName = props.firstSection
    ? styles.first_header
    : styles.second_header;
  const paragraphClassName = props.firstSection
    ? styles.first_paragraph
    : styles.second_paragraph;
  const buttonClassName = props.firstSection
    ? styles.first_button
    : styles.second_button;
  return (
    <div className={styles.converter}>
      <h1 className={headerClassName}>{props.header}</h1>
      <p className={paragraphClassName}>{props.mainText}</p>
      <button className={buttonClassName}>{props.buttonText}</button>
    </div>
  );
}
