import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CardIngredients from '../Components/CardIngredients';

function ExploreDrinkIngredients() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Ingredients');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <CardIngredients />
      <Footer />
    </>
  );
}

export default ExploreDrinkIngredients;
