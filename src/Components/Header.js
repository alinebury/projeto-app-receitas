import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import '../Styles/Header.css';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  const { title, search, setShowSearchBar } = useContext(RecipesContext);
  return (
    <header>
      <nav>
        { search && (
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ () => setShowSearchBar((prevState) => !prevState) }
          >
            <img
              src={ searchIcon }
              alt="search icon"
            />
          </button>) }
        <h2
          className="foods-title"
          data-testid="page-title"
        >
          { title }
        </h2>
        <Link to="/profile">
          <img
            className="profile-top"
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile icon"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
