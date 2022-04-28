import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Header from '../Components/Header';

function DoneRecipes() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Done Recipes');
    setSearch(false);
  }, []);

  return (
    <Header />
  );
}

export default DoneRecipes;
