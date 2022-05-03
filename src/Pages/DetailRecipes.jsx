import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchOneFoodRecipe, fetchFoodRecommendation } from '../Api/foodsAPI';
import { fetchOneDrinkRecipe, fetchDrinkRecommendation } from '../Api/drinksAPI';
import Recommendations from '../Components/RecomendationsList';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../Styles/DetailRecipes.css';

function DetailRecipes(props) {
  const history = useHistory();
  const { match: { url, params: { id } }, match } = props;
  const [recipe, setRecipe] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [ingredient, setIgredient] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
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
  // id food test = 52771
  // id drink test = 178319

  useEffect(() => {
    fecthAPIRecipe();
    const inProgressRecipes = JSON.parse(localStorage
      .getItem('inProgressRecipes') || '{}');
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes') || '[]'));
    console.log(inProgressRecipes);
    // console.log(favoriteRecipes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  // console.log(recipe);

  useEffect(() => {
    // console.log(favoriteRecipes);
    setIsFavorite(favoriteRecipes.some((favRecipe) => favRecipe.id === id));
    console.log(favoriteRecipes.some((favRecipe) => favRecipe.id === id));
  }, [id, favoriteRecipes]);

  useEffect(() => {
    if (recipe.length > 0) {
      const ingredients = Object.keys(recipe[0])
        .filter((key) => key.includes('strIngredient'))
        .map((ingre) => recipe[0][ingre])
        .filter((ing) => ing != null && ing !== '');
      setIgredient(ingredients);
    }
  }, [recipe]);

  const buttonFavorite = () => {
    setIsFavorite((prev) => !prev);
    const listFavorites = [...favoriteRecipes, {
      id,
      type: isFood ? 'food' : 'drinks',
      nationality: recipe[0].strArea || '',
      category: recipe[0].strCategory || '',
      alcoholicOrNot: recipe[0].strAlcoholic || '',
      name: isFood ? recipe[0].strMeal : recipe[0].strDrink,
      image: isFood ? recipe[0].strMealThumb : recipe[0].strDrinkThumb,
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(listFavorites));
  };

  const buttonStarRecipe = () => {
    history.push(`${url}/in-progress`);
    console.log(match);
  };

  return (
    <div>
      { recipe.length !== 0 && (
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

          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => navigator.clipboard.writeText(url) }
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ buttonFavorite }
          >
            <img
              src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="favoriteIcon"
            />
          </button>

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
