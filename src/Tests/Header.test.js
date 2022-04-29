import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
import Header from '../Components/Header';
import RenderWithRouter from './RenderWithRouter';

describe('testing header component', () => {
  const context = createContext();
  it('if the described attributes exist', () => {
    const { getByTestId } = RenderWithRouter(<Header />, context);
    const button = getByTestId('search-top-btn');
    const title = getByTestId('page-title');
    const image = getByTestId('profile-top-btn');

    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('if it has an icon for the profile screen, a title and an icon for the search',
    () => {
      const { getByTestId, getByRole } = RenderWithRouter(<Header />, context);
      const profileIcon = getByRole('img', { name: /profile icon/i });
      const title = getByTestId('page-title');
      const searchIcon = getByRole('img', { name: /search icon/i });

      expect(profileIcon).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(searchIcon).toBeInTheDocument();
    });

  it('if the user is redirected to the profile screen when clicking on'
    + 'the profile icon', () => {
    const { getByTestId } = RenderWithRouter(<Header />, context);
    const clickProfile = getByTestId(/profile-top-btn/i);

    userEvent.click(clickProfile);
    expect(clickProfile).toBeInTheDocument();

    const profile = getByTestId(/profile/i);
    expect(profile).toBeInTheDocument();
  });

  it('if there is a search button that, when clicked, the search bar should appear',
    () => {
      const { queryByTestId, getByTestId } = RenderWithRouter(<Header />, context);
      const searchInput = queryByTestId('search-input');
      const search = getByTestId('search-top-btn');

      userEvent.click(search);
      expect(searchInput).not.toBeInTheDocument();
      expect(search).toBeInTheDocument();
    });
});
