import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Profile() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Profile');
    setSearch(false);
  }, []);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Profile;
