import styles from "./Title.module.css";

function Title() {
  return (
    <div className={styles.title}>
      <h1 className={`text-preset-1 ${styles.heading}`}>
        Simple Omelette Recipe
      </h1>
      <p className={`text-preset-4 ${styles.description}`}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
}

export default Title;
