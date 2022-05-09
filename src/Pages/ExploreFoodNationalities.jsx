import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Header from '../Components/Header';
import Search from '../Components/Search';
import ExploreNationalites from '../Components/ExploreNationalities';
import Footer from '../Components/Footer';

function ExploreFoodNacionalities() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Explore Nationalities');
    setSearch(true);
  }, []);

  return (
    <>
      <Header />
      <Search />
      <ExploreNationalites />
      <Footer />
    </>
  );
}

export default ExploreFoodNacionalities;
