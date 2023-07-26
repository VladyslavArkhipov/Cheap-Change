import styles from "./Main.module.css";
export function Image(props) {
  return (
    <div className={styles.image}>
      <img
        src={props.image}
        alt="card"
        width={props.width}
        height={props.height}
      ></img>
    </div>
  );
}
