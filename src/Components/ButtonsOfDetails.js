import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ButtonsOfDetails({ id, favoriteRecipes, objRecipe, url }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteRecipes.some((favRecipe) => favRecipe.id === id));
  }, [id, favoriteRecipes]);

  const buttonFavorite = () => {
    setIsFavorite((prev) => !prev);
    const listFavorites = [...favoriteRecipes, objRecipe];
    localStorage.setItem('favoriteRecipes', JSON.stringify(listFavorites));
  };

  const handleButtonShare = () => {
    navigator.clipboard.writeText(`http://localhost:3000${url}`);
    setIsCopied((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        src={ shareIcon }
        data-testid="share-btn"
        onClick={ handleButtonShare }
      >
        {isCopied ? 'Link copied!' : <img src={ shareIcon } alt="shareIcon" />}
      </button>
      <button
        type="button"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        data-testid="favorite-btn"
        onClick={ buttonFavorite }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favoriteIcon"
        />
      </button>
    </div>
  );
}

ButtonsOfDetails.propTypes = {
  id: PropTypes.string.isRequired,
  favoriteRecipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  objRecipe: PropTypes.shape({}).isRequired,
  url: PropTypes.string.isRequired,
};

export default ButtonsOfDetails;
