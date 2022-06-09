import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipesContext from '../Context/RecipesContext';
import Search from '../Components/Search';
import RecipesList from '../Components/RecipesList';
import Categories from '../Components/Categories';

function Foods() {
  const { setTitle, setShowSearchBar,
    getSearch, setSearch, setCategories } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods');
    getSearch('Foods');
    setShowSearchBar(false);
    setSearch(true);
    setCategories('');
  }, []);

  return (
    <>
      <Header />
      <Search />
      <Categories type="foods" />
      <RecipesList />
      <Footer />
    </>
  );
}

export default Foods;
