import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import { fetchFoodIngredient, fetchFoodsRecipes } from '../Api/foodsAPI';
import { fetchDrinkIngredient, fetchDrinksRecipes } from '../Api/drinksAPI';

function CardIngredients(props) {
  const { setTitle, setSearch, setRecipes, setRedirect } = useContext(RecipesContext);
  const { isFood } = props;
  const history = useHistory();
  const MAX_INGREDIENTS = 12;
  const [ingredients, setIngredients] = useState([]);

  const fecthAPIIngredients = isFood ? (
    async () => {
      setIngredients(await fetchFoodIngredient());
    }
  ) : (
    async () => {
      setIngredients(await fetchDrinkIngredient());
    }
  );

  const handleClick = async (element) => {
    setRedirect(true);
    const obj = {
      searchRadio: 'i',
      search: element,
    };
    if (isFood) {
      setRecipes(await fetchFoodsRecipes(obj));
      history.push('/foods');
    } else {
      setRecipes(await fetchDrinksRecipes(obj));
      history.push('/drinks');
    }
  };

  useEffect(() => {
    fecthAPIIngredients();
    setTitle('Explore Ingredients');
    setSearch(false);
  }, []);

  return (
    <>
      { ingredients.slice(0, MAX_INGREDIENTS).map((ingred, index) => (
        isFood ? (
          <element
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            onClick={ () => handleClick(ingred.strIngredient) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingred.strIngredient}-Small.png` }
              alt={ ingred.strIngredient }
              width="50%"
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              { ingred.strIngredient }
            </p>
          </element>
        ) : (
          <element
            data-testid={ `${index}-ingredient-card` }
            key={ index }
            onClick={ () => handleClick(ingred.strIngredient1) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingred.strIngredient1}-Small.png` }
              alt={ ingred.setIngredient1 }
              width="50%"
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              { ingred.strIngredient1 }
            </p>
          </element>
        )
      ))}
    </>
  );
}

CardIngredients.propTypes = {
  isFood: PropTypes.bool.isRequired,
};

export default CardIngredients;
