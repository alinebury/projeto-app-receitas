import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Search from '../Components/Search';
import RecipesList from '../Components/RecipesList';
import Categories from '../Components/Categories';

function Drinks() {
  const { setTitle, setShowSearchBar,
    getSearch, setSearch, setCategories } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks');
    getSearch('Drinks');
    setShowSearchBar(false);
    setSearch(true);
    setCategories('');
  }, []);

  return (
    <>
      <Header />
      <Search />
      <Categories type="drinks" />
      <RecipesList />
      <Footer />
    </>
  );
}

export default Drinks;
