import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const { title } = props;
  return (
    <>
      <img data-testid="profile-top-btn" src={ profileIcon } alt="profile" />
      <h3 data-testid="page-title">{title}</h3>
      <img data-testid="search-top-btn" src={ searchIcon } alt="search" />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
