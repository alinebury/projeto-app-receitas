import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipesContext from '../Context/RecipesContext';
import Search from '../Components/Search';
import RecipesList from '../Components/RecipesList';

function Foods() {
  const { setTitle, setShowSearchBar, getSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods');
    getSearch('Foods');
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

export default Foods;
