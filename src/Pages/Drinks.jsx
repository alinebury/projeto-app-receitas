import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

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
