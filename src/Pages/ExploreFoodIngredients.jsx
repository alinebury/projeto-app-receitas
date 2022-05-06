import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import CardIngredients from '../Components/CardIngredients';
import Header from '../Components/Header';

function ExploreFoodIngredients() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Ingredients');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <CardIngredients isFood />
      <Footer />
    </>
  );
}

export default ExploreFoodIngredients;
