import React from 'react';
import CardRecipe from './CardRecipe';

const NUMBER_SIX = 6;

function Recommendations(props) {
  const { recommendation } = props;
  // console.log(recommendation);
  return (
    recommendation.length > 0 && recommendation.slice(0, NUMBER_SIX)
      .map((recom, index) => (
        <CardRecipe
          key={ index }
          index={ index }
          testid={ `${index}-recomendation-card` }
          recipe={ recom }
        />))
  );
}

export default Recommendations;
