import styles from "./Main.module.css";
export function ConverterInfo(props) {
  const headerClassName = props.firstSection
    ? styles.first_header
    : styles.second_header;
  const paragraphClassName = props.firstSection
    ? styles.first_paragraph
    : styles.second_paragraph;
  const buttonClassName = props.firstSection
    ? styles.first_button
    : styles.second_button;
  const handleClick = (e) => {
    e.preventDefault();
    props.onVisibilityChange(false);
  };
  return (
    <div className={styles.converter}>
      <h1 className={headerClassName}>{props.header}</h1>
      <p className={paragraphClassName}>{props.mainText}</p>
      <a href="/" onClick={handleClick} className={buttonClassName}>
        {props.buttonText}
      </a>
    </div>
  );
}
