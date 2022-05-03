import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CardRecipe.css';

function CardRecipe(prop) {
  const { index, recipe, testid } = prop;
  const type = recipe.idMeal ? 'Meal' : 'Drink';
  const link = type === 'Meal' ? `/foods/${recipe.idMeal}` : `/drinks/${recipe.idDrink}`;
  const testIdName = testid
    .includes('recomendation-card') ? '-recomendation-title' : '-card-name';
  return (
    <Link to={ link }>
      <div
        className="card"
        data-testid={ testid }
      >
        <p
          data-testid={ `${index}${testIdName}` }
        >
          { recipe[`str${type}`] }
        </p>
        <img
          data-testid={ `${index}-card-img` }
          src={ recipe[`str${type}Thumb`] }
          alt={ recipe[`str${type}`] }
          className="cardImage"
        />
      </div>
    </Link>
  );
}

export default CardRecipe;
