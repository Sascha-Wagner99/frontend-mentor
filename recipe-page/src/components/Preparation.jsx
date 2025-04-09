import styles from "./Preparation.module.css";

function Preparation() {
  return (
    <section className={styles.PreparationCard}>
      <h2 className={`text-preset-3 ${styles.PreparationHeading}`}>
        Preparation time
      </h2>
      <ul className={styles.PreparationList}>
        <li className="text-preset-4">
          <strong className="text-preset-4-bold">Total:</strong> Approximately
          10 minutes
        </li>
        <li className="text-preset-4">
          <strong className="text-preset-4-bold">Preparation:</strong> 5 minutes
        </li>
        <li className="text-preset-4">
          <strong className="text-preset-4-bold">Cooking:</strong> 5 minutes
        </li>
      </ul>
    </section>
  );
}

export default Preparation;
