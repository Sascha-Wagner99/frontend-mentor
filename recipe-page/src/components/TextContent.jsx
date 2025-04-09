import styles from "./TextContent.module.css";
import Title from "./Title";
import Preparation from "./preparation";

function TextContent() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Preparation />
    </div>
  );
}

export default TextContent;
