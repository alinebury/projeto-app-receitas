import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getStorageFavoriteRecipes,
  setStorageFavoriteRecipes,
  removeStorageFavoriteRecipes } from '../Services/localStorage';

function ButtonsOfDetails({ id, objRecipe, url }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(getStorageFavoriteRecipes().some((favRecipe) => favRecipe.id === id));
  }, []);

  const buttonFavorite = () => {
    setIsFavorite((prev) => {
      if (prev) removeStorageFavoriteRecipes(objRecipe);
      else setStorageFavoriteRecipes(objRecipe);
      return !prev;
    });
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
  // favoriteRecipes: PropTypes.arrayOf(PropTypes.any).isRequired,
  objRecipe: PropTypes.shape({}).isRequired,
  url: PropTypes.string.isRequired,
};

export default ButtonsOfDetails;
