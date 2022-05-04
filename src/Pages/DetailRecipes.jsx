import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchOneFoodRecipe, fetchFoodRecommendation } from '../Api/foodsAPI';
import { fetchOneDrinkRecipe, fetchDrinkRecommendation } from '../Api/drinksAPI';
import Recommendations from '../Components/RecomendationsList';
import ButtonsOfDetails from '../Components/ButtonsOfDetails';
import '../Styles/DetailRecipes.css';
import { getStorageInProgressRecipes,
  setStorageInProgressRecipes } from '../Services/localStorage';

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

function DetailRecipes(props) {
  const history = useHistory();
  const { match: { url, params: { id } } } = props;
  const [recipe, setRecipe] = useState([]);
  const [objRecipe, setObjRecipe] = useState({});
  const [recommendation, setRecommendation] = useState([]);
  const [ingredient, setIgredient] = useState([]);
  const [textButtonStarRecipe, setTextButtonStarRecipe] = useState();
  const isFood = url.includes('foods');
  const fecthAPIRecipe = isFood ? (
    async () => {
      setRecipe(await fetchOneFoodRecipe(id));
      setRecommendation(await fetchDrinkRecommendation());
    }
  ) : (
    async () => {
      setRecipe(await fetchOneDrinkRecipe(id));
      setRecommendation(await fetchFoodRecommendation());
    }
  );

  useEffect(() => {
    fecthAPIRecipe();
    const progressRecipe = getStorageInProgressRecipes();
    setTextButtonStarRecipe(
      Object.values(progressRecipe)
        .some((reci) => reci[id]) ? 'Continue Recipe' : 'Star Recipe',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (recipe.length > 0) {
      const ingredients = Object.keys(recipe[0])
        .filter((key) => key.includes('strIngredient'))
        .map((ingre) => recipe[0][ingre])
        .filter((ing) => ing != null && ing !== '');
      setIgredient(ingredients);

      setObjRecipe(objOfRecipe(recipe, id, isFood));
    }
  }, [id, isFood, recipe]);

  const buttonStarRecipe = () => {
    if (textButtonStarRecipe === 'Star Recipe') {
      setStorageInProgressRecipes(id, isFood);
    }
    history.push(`${url}/in-progress`);
  };

  return (
    <div>
      { recipe.length !== 0 && (
        <>
          <img
            width="100%"
            data-testid="recipe-photo"
            src={ objRecipe.image }
            alt={ objRecipe.name }
          />
          <h2 data-testid="recipe-title">
            { objRecipe.name }
          </h2>

          <ButtonsOfDetails
            objRecipe={ objRecipe }
            id={ id }
            url={ url }
          />

          <h3 data-testid="recipe-category">
            { isFood ? recipe[0].strCategory : recipe[0].strAlcoholic}
          </h3>
          <ul>
            { ingredient.map((whatever, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient[index]} - ${recipe[0][`strMeasure${index + 1}`]}`}
              </li>
            )) }
          </ul>
          <p data-testid="instructions">{ recipe[0].strInstructions }</p>
          { isFood && (
            <video data-testid="video" controls>
              <source src={ recipe[0].strYoutube } type="video/mp4" />
              <track kind="captions" />
            </video>) }
          <Recommendations recommendation={ recommendation } />
          <button
            className="btnStartRecipe"
            type="button"
            data-testid="start-recipe-btn"
            onClick={ buttonStarRecipe }
          >
            {textButtonStarRecipe}
          </button>
        </>
      ) }
    </div>
  );
}

DetailRecipes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailRecipes;
