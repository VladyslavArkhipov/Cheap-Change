import styles from "./Footer.module.css";
export function Phone(props) {
  return (
    <div className={styles.phone}>
      <div className={styles.image}>
        <img src={props.img} alt="phone"></img>
      </div>
      <div className={styles.text}>
        <h3>{props.number}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}
