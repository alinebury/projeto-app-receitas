import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Link to="/drinks">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          src="../images/drinkIcon.svg"
        >
          <img src={ drinkIcon } alt="Drink Icon" />
        </button>
      </Link>
      <Link to="/explore">
        <button
          type="button"
          data-testid="explore-bottom-btn"
          src="../images/exploreIcon.svg"
        >
          <img src={ exploreIcon } alt="Explore Icon" />
        </button>
      </Link>
      <Link to="/foods">
        <button
          type="button"
          data-testid="food-bottom-btn"
          src="../images/mealIcon.svg"
        >
          <img src={ mealIcon } alt="Food Icon" />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
