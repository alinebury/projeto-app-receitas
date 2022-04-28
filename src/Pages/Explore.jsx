import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Explore() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setSearch(false);
    setTitle('Explore');
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Explore;
