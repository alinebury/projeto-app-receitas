import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context/RecipesContext';
import '../Styles/Header.css';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header() {
  const { title } = useContext(RecipesContext);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header>
      <nav>
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
        </button>
        <h2 data-testid="page-title">{ title }</h2>
        <Link to="/profile">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile icon"
          />
        </Link>
      </nav>

      {
        showSearchBar && <input
          data-testid="search-input"
          type="search"
          placeholder="pesquisar receita"
        />
      }
    </header>
  );
}

export default Header;
