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
        <h3
          className="title-card"
          data-testid={ `${index}${testIdName}` }
        >
          { recipe[`str${type}`] }
        </h3>
        <span>
          <img
            data-testid={ `${index}-card-img` }
            src={ recipe[`str${type}Thumb`] }
            alt={ recipe[`str${type}`] }
            className="cardImage"
          />
        </span>
      </div>
    </Link>
  );
}

export default CardRecipe;
