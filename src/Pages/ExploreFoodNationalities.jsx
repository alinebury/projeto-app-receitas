import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreFoodNacionalities() {
  const { setTitle } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Nationalities');
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ExploreFoodNacionalities;
