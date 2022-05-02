import React, { useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';
import CardRecipe from './CardRecipe';

function RecipesList() {
  const { searchAPI } = useContext(RecipesContext);
  const MAXRECIPES = 12;

  return (
    searchAPI.length > 1 && (
      <article>
        { searchAPI.slice(0, MAXRECIPES)
          .map((item, index) => (
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
