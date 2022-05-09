import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Header from '../Components/Header';
import ListRecipesInStorege from '../Components/ListDoneRecipes';

function FavoriteRecipes() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Favorite Recipes');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <ListRecipesInStorege doneOrFavorite="Favorite" />
    </>
  );
}

export default FavoriteRecipes;
