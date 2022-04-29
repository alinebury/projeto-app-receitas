import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Search from '../Components/Search';
import RecipesList from '../Components/RecipesList';

function Drinks() {
  const { setTitle } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks');
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
