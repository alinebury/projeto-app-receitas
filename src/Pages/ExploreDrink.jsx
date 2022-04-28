import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreDrinks() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Drinks');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ExploreDrinks;
