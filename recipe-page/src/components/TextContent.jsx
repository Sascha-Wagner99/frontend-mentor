import styles from "./TextContent.module.css";
import Title from "./Title";
import Preparation from "./preparation";
import Ingredients from "./Ingredients";

function TextContent() {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Preparation />
      <Ingredients />
    </div>
  );
}

export default TextContent;
