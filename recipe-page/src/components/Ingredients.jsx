import styles from "./Ingredients.module.css";

function Ingredients() {
  return (
    <section className={styles.IngredientsSection}>
      <h2 className={`text-preset-2 ${styles.SubHeading}`}>Ingredients</h2>
      <ul className={styles.IngredientsList}>
        <li className="text-preset-4">2-3 large eggs</li>
        <li className="text-preset-4">Salt, to taste</li>
        <li className="text-preset-4">Pepper, to taste</li>
        <li className="text-preset-4">1 tablespoon of butter or oil</li>
        <li className="text-preset-4">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </section>
  );
}

export default Ingredients;
