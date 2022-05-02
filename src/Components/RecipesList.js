import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';
import CardRecipe from './CardRecipe';

function RecipesList() {
  const { recipesAPI } = useContext(RecipesContext);
  const MAXRECIPES = 12;

  return (
    recipesAPI.length > 1 && (
      <article>
        { recipesAPI.slice(0, MAXRECIPES)
          .map((item, index) => (
            <CardRecipe
              key={ index }
              index={ index }
              recipe={ item }
            />)) }
      </article>
    )
  );
}

export default RecipesList;
