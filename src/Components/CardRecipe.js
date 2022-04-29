import React from 'react';
import '../Styles/CardRecipe.css';

function CardRecipe(prop) {
  console.log(prop);
  const { index, recipe } = prop;
  const type = recipe.idMeal ? 'Meal' : 'Drink';
  return (
    <div
      data-testid={ `${index}-recipe-card` }
    >
      <p
        data-testid={ `${index}-card-name` }
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
  );
}

export default CardRecipe;
