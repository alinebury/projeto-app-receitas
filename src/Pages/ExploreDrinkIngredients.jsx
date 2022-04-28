import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreDrinkIngredients() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Ingredients');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ExploreDrinkIngredients;
