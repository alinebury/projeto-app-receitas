import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchOneFoodRecipe, fetchFoodRecommendation } from '../Api/foodsAPI';
import { fetchOneDrinkRecipe, fetchDrinkRecommendation } from '../Api/drinksAPI';
import Recommendations from '../Components/RecomendationsList';
import '../Styles/DetailRecipes.css';

// const NUMBER_SIX = 6;

function DetailRecipes(props) {
  const history = useHistory();
  const { match: { url, params: { id } } } = props;
  const [recipe, setRecipe] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [ingredient, setIgredient] = useState([]);
  const isFood = url.includes('foods'); // mudar
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
  // id food = 52771
  // id drink = 178319

  useEffect(() => {
    fecthAPIRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (recipe.length > 0) {
      const ingredients = Object.keys(recipe[0])
        .filter((key) => key.includes('strIngredient'))
        .map((ingre) => recipe[0][ingre])
        .filter((ing) => ing != null && ing !== '');
      setIgredient(ingredients);
    }
  }, [recipe]);

  // console.log(recommendation);
  // console.log(ingredient);
  // console.log(recommendation.slice(0, NUMBER_SIX));

  return (
    <div>
      { recipe.length === 0 ? <p>Carregando...</p> : (
        <>
          <img
            width="100%"
            data-testid="recipe-photo"
            src={
              isFood ? recipe[0].strMealThumb : recipe[0].strDrinkThumb
            }
            alt={ isFood ? recipe[0].strMeal : recipe[0].strDrink }
          />
          <h2 data-testid="recipe-title">
            { isFood ? recipe[0].strMeal : recipe[0].strDrink }
          </h2>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
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
            onClick={ () => history.push(`${url}/in-progress`) }
          >
            Star Recipe
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
