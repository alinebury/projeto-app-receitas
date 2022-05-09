import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  removeStorageFavoriteRecipes,
  getStorageFavoriteRecipes,
} from '../Services/localStorage';

function CardHorizontalRecipe(props) {
  const { recipe, index, doneOrFavorite, setRenderRecipes } = props;
  console.log(recipe);
  const [isCopied, setIsCopied] = useState(false);

  const handleButtonShare = (type, id) => {
    navigator.clipboard.writeText(`http://localhost:3000/${`${type}s/${id}`}`);
    setIsCopied((prev) => !prev);
  };

  const handleBtnFavorite = () => {
    removeStorageFavoriteRecipes(recipe);
    setRenderRecipes(getStorageFavoriteRecipes());
  };

  return (
    <div>
      <Link to={ `${recipe.type}s/${recipe.id}` }>
        <img
          width="100%" // mago do css resolva isso aqui
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.image }
          alt={ recipe.name }
        />
      </Link>
      { recipe.type === 'food' ? (
        <p data-testid={ `${index}-horizontal-top-text` }>
          {`${recipe.nationality} - ${recipe.category} `}
        </p>
      ) : (
        <p data-testid={ `${index}-horizontal-top-text` }>
          {recipe.alcoholicOrNot}
        </p>) }
      <button
        type="button"
        src={ shareIcon }
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ () => handleButtonShare(recipe.type, recipe.id) }
      >
        {isCopied ? 'Link copied!' : <img src={ shareIcon } alt="shareIcon" />}
      </button>
      { doneOrFavorite.includes('Favorite') && (
        <button
          onClick={ handleBtnFavorite }
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          type="button"
        >
          <img src={ blackHeartIcon } alt="blackHeartIcon" />
        </button>
      )}
      <Link to={ `${recipe.type}s/${recipe.id}` }>
        <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
      </Link>

      { doneOrFavorite.includes('Done') && (
        <>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          <p>
            {recipe.tags.length > 0 && recipe.tags
              .slice(0, 2).map((tag) => (
                <span
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </span>
              ))}
          </p>
        </>)}
    </div>
  );
}

CardHorizontalRecipe.propTypes = {
  setRenderRecipes: PropTypes.func.isRequired,
  doneOrFavorite: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    alcoholicOrNot: PropTypes.string,
    doneDate: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default CardHorizontalRecipe;
