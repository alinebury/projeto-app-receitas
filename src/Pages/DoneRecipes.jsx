import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Header from '../Components/Header';
import ListDoreRecipes from '../Components/ListDoneRecipes';

function DoneRecipes() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Done Recipes');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <ListDoreRecipes />
    </>
  );
}

export default DoneRecipes;
