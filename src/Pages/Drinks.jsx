import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Search from '../Components/Search';
import RecipesList from '../Components/RecipesList';

function Drinks() {
  const { setTitle, setShowSearchBar, getSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks');
    getSearch('Drinks');
    setShowSearchBar(false);
  }, []);

  return (
    <>
      <Header />
      <Search />
      <RecipesList />
      <Footer />
    </>
  );
}

export default Drinks;
