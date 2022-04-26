import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearchBar: false,
    };
  }

  handleCLick = () => {
    const { showSearchBar } = this.state;
    this.setState({ showSearchBar: !showSearchBar });
  }

  render() {
    const { showSearchBar } = this.state;
    return (
      <header>
        <nav>
          <button
            type="button"
            data-testid="search-top-btn"
            src={ searchIcon }
            onClick={ this.handleCLick }
          >
            <img
              src={ searchIcon }
              alt="search icon"
            />
          </button>
          <h2 data-testid="page-title">Foods</h2>
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
}
