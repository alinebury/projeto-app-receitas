import React from 'react';
import PropTypes from 'prop-types';
import CardRecipe from './CardRecipe';
import '../Styles/RecomendationsList.css';

const NUMBER_SIX = 6;

function Recommendations(props) {
  const { recommendation } = props;
  return (
    <div className="carousel">
      {
        recommendation.length > 0 && recommendation.slice(0, NUMBER_SIX)
          .map((recom, index) => (
            <CardRecipe
              key={ index }
              index={ index }
              testid={ `${index}-recomendation-card` }
              recipe={ recom }
            />))
      }
    </div>
  );
}

Recommendations.propTypes = {
  recommendation: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Recommendations;
