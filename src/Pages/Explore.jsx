import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Explore() {
  const { setTitle, setSearch } = useContext(RecipesContext);
  const history = useHistory();
  useEffect(() => {
    setSearch(false);
    setTitle('Explore');
  }, []);

  const handleClick = ({ target: { name } }) => {
    history.push(`/explore/${name}`);
  };

  return (
    <>
      <Header />
      <button
        type="button"
        data-testid="explore-foods"
        name="foods"
        onClick={ handleClick }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        name="drinks"
        onClick={ handleClick }
      >
        Explore Drinks
      </button>
      <Footer />
    </>
  );
}

Explore.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Explore;
