import styles from './Recipe.module.css';


export default function Recipe({ recipe }) {
  console.log('recipe: ', recipe);
  return (
    <div className={styles.recipecontainer}>
      <div className={styles.recipeDescriptionContainer}>
        <h2 className={styles.label}>Name:</h2>
        <h3 className={styles.recipeTitle}>{recipe.title}</h3>
      </div>
      <div className={styles.recipeDescriptionContainer}>
        <h2 className={styles.label}>Description:</h2>
        <p className={styles.recipeDescription}>{recipe.description}</p>
      </div>
      <ul className={styles.ingredients}>
        <h2 className={styles.label}>Ingredients:</h2>
        {recipe.ingredients.map((ingredient, i) => <li key={i}>{`${i + 1}: ${ingredient}`}</li>)}
      </ul>
      <ul className={styles.directions}>
        <h2 className={styles.label}>Directions:</h2>
        {recipe.directions.map((step, i) => <li key={i}>{`Step ${i + 1}: ${step}`}</li>)}
      </ul>
    </div>
  )
}