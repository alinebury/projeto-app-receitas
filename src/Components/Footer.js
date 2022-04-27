import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <footer className="footer" data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src="../images/drinkIcon.svg"
        onClick={ () => history.push('/drinks') }
      >
        <img src={ drinkIcon } alt="Drink Icon" />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        src="../images/exploreIcon.svg"
        onClick={ () => history.push('/explore') }
      >
        <img src={ exploreIcon } alt="Explore Icon" />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        src="../images/mealIcon.svg"
        onClick={ () => history.push('/foods') }
      >
        <img src={ mealIcon } alt="Food Icon" />
      </button>
    </footer>
  );
}

export default Footer;
