import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipesContext from '../Context/RecipesContext';

function Foods() {
  const { setTitle } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods');
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Foods;
