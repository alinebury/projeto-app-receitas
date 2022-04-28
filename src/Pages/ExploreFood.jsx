import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreFood() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Foods');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default ExploreFood;
