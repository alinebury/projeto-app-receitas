import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ButtonsOfDetails from '../Components/ButtonsOfDetails';
import Ingredients from '../Components/Ingredients';
import '../Styles/DetailRecipes.css';
import { fetchOneFoodRecipe } from '../Api/foodsAPI';
import { fetchOneDrinkRecipe } from '../Api/drinksAPI';
import { setStorageDoneRecipes } from '../Services/localStorage';

function objOfRecipe(recipe, id, isFood) {
  return ({
    id,
    type: isFood ? 'food' : 'drink',
    nationality: recipe[0].strArea || '',
    category: recipe[0].strCategory || '',
    alcoholicOrNot: recipe[0].strAlcoholic || '',
    name: isFood ? recipe[0].strMeal : recipe[0].strDrink,
    image: isFood ? recipe[0].strMealThumb : recipe[0].strDrinkThumb,
  });
}

function objOfDoneRecipe(objRecipe, recipe) {
  const date = new Date();
  const doneDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return {
    ...objRecipe,
    doneDate,
    tags: recipe[0].strTags ? recipe[0].strTags.split(', ') : [],
  };
}

function InProgressRecipe(props) {
  const history = useHistory();
  const { match: { url, params: { id } } } = props;
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeObj, setRecipeObj] = useState({});
  const [cantFinish, setCantFinish] = useState(true);
  const isFood = url.includes('food');
  const fecthAPIRecipe = isFood ? (
    async () => setRecipe(await fetchOneFoodRecipe(id))
  ) : (
    async () => setRecipe(await fetchOneDrinkRecipe(id))
  );

  useEffect(() => {
    fecthAPIRecipe();
  }, []);

  useEffect(() => {
    if (recipe.length === 0) return;
    setRecipeObj(objOfRecipe(recipe, id, isFood));
    setIngredients((Object.keys(recipe[0])
      .filter((item) => item.includes('strIngredient')
      && recipe[0][item] && recipe[0][item] !== '')));
  }, [recipe]);

  const handleButton = () => {
    setStorageDoneRecipes(objOfDoneRecipe(recipeObj, recipe));
    history.push('/done-recipes');
  };

  return (
    <div>
      { (recipe.length !== 0 && recipeObj !== {}) && (
        <>
          <img
            width="100%"// mago do css resolva isso aq
            data-testid="recipe-photo"
            src={ recipeObj.image }
            alt={ recipeObj.name }
          />
          <h2 data-testid="recipe-title">
            { recipeObj.name }
          </h2>
          <ButtonsOfDetails
            objRecipe={ recipeObj }
            id={ id }
            url={ url.replace('/in-progress', '') }
          />
          <h3 data-testid="recipe-category">
            { isFood ? recipeObj.strCategory : recipeObj.strAlcoholic }
          </h3>
          { recipeObj !== {} && <Ingredients
            id={ id }
            itens={ ingredients }
            recipe={ recipe[0] }
            isFood={ isFood }
            handleButton={ setCantFinish }
          /> }
          <p data-testid="instructions">{ recipe[0].strInstructions }</p>
          <button
            className="btnStartRecipe"// mago do css resolva isso aq
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ handleButton }
            disabled={ cantFinish }
          >
            Finish Recipe
          </button>
        </>
      )}
    </div>
  );
}

InProgressRecipe.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default InProgressRecipe;
