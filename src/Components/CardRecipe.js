import React from 'react';
import '../Styles/CardRecipe.css';

function CardRecipe(prop) {
  // console.log(prop);
  const { index, recipe, testid } = prop;
  const type = recipe.idMeal ? 'Meal' : 'Drink';
  const testIdName = testid
    .includes('recomendation-card') ? '-recomendation-title' : '-card-name';
  return (
    <div
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
  );
}

export default CardRecipe;
