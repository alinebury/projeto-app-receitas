import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Header from '../Components/Header';

function FavoriteRecipes() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Favorite Recipes');
    setSearch(false);
  }, []);

  return (
    <Header />
  );
}

export default FavoriteRecipes;
