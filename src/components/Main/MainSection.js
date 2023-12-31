import { ConverterInfo } from "./ConverterInfo";
import { Image } from "./Image";
import styles from "./Main.module.css";

export function MainSection(props) {
  return (
    <section style={{ backgroundImage: `url(${props.backgroundUrl})` }}>
      <div className={styles.wrapper}>
        <ConverterInfo
          onVisibilityChange={props.onVisibilityChange}
          firstSection={props.firstSection}
          header={props.header}
          mainText={props.mainText}
          buttonText={props.buttonText}
        />
        <Image image={props.image} width={props.width} height={props.height} />
      </div>
    </section>
  );
}
