import React, { useContext, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipesContext from '../Context/RecipesContext';

function Drinks() {
  const { setTitle } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks');
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Drinks;
