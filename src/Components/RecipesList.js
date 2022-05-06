import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';
import CardRecipe from './CardRecipe';
import '../Styles/RecipesList.css';

function RecipesList() {
  const { recipes } = useContext(RecipesContext);
  const MAXRECIPES = 12;
  console.log(recipes);
  return (
    recipes.length >= 1 && (
      <article className="recipesList">
        { recipes.slice(0, MAXRECIPES).map((item, index) => (
          <CardRecipe
            key={ index }
            testid={ `${index}-recipe-card` }
            index={ index }
            recipe={ item }
          />)) }
      </article>
    )
  );
}

export default RecipesList;
