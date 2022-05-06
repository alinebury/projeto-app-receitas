import React, { useState, useEffect, useContext } from 'react';
import RecipesContext from '../Context/RecipesContext';
import {
  getStorageDoneRecipes,
  getStorageFavoriteRecipes,
} from '../Services/localStorage';
import CardHorizontalRecipe from './CardHorizontalRecipe';

function ListRecipesInStorege() {
  const { title } = useContext(RecipesContext);
  console.log(title.includes('Favorite'));
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [renderRecipes, setRenderRecipes] = useState([]);

  useEffect(() => {
    const recipes = title.includes('Favorite')
      ? getStorageFavoriteRecipes()
      : getStorageDoneRecipes();
    setDoneRecipes(recipes);
    setRenderRecipes(recipes);
  }, [title]);

  const handleButtonAll = () => {
    setRenderRecipes(doneRecipes);
  };

  const handleButtonFood = () => {
    setRenderRecipes(doneRecipes.filter((recipe) => recipe.type === 'food'));
  };

  const handleButtonDrink = () => {
    setRenderRecipes(doneRecipes.filter((recipe) => recipe.type === 'drink'));
  };

  return (
    <div>
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ handleButtonAll }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ handleButtonFood }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ handleButtonDrink }
        >
          Drinks
        </button>
      </div>
      {renderRecipes.length > 0 && renderRecipes
        .map((recipe, index) => (
          <CardHorizontalRecipe
            key={ recipe.id }
            recipe={ recipe }
            index={ index }
            doneOrFavorite={ title }
            setRenderRecipes={ setRenderRecipes }
          />
        ))}
    </div>
  );
}

export default ListRecipesInStorege;
