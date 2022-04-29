import React, { createContext } from 'react';
import userEvent from '@testing-library/user-event';
import Footer from '../Components/Footer';
import RenderWithRouter from './RenderWithRouter';

describe('testing footer component', () => {
  const context = createContext();
  it('if the described attributes exist', () => {
    const { getByTestId } = RenderWithRouter(<Footer />, context);
    const buttonDrink = getByTestId('drinks-bottom-btn');
    const buttonExplore = getByTestId('explore-bottom-btn');
    const buttonFood = getByTestId('food-bottom-btn');

    expect(buttonDrink).toBeInTheDocument();
    expect(buttonExplore).toBeInTheDocument();
    expect(buttonFood).toBeInTheDocument();
  });

  it('if there are 3 icons one for food, one for drinks and one for exploration',
    () => {
      const { getByRole } = RenderWithRouter(<Footer />, context);
      const drinkIcon = getByRole('img', { name: /Drink Icon/i });
      const exploreIcon = getByRole('img', { name: /Explore Icon/i });
      const mealIcon = getByRole('img', { name: /Food Icon/i });

      expect(drinkIcon).toBeInTheDocument();
      expect(exploreIcon).toBeInTheDocument();
      expect(mealIcon).toBeInTheDocument();
    });

  it('if the lower menu exists only on the indicated screens',
    () => {
      const { getByTestId } = RenderWithRouter(<Footer />, context);
      const drinkIcon = getByTestId('drinks-bottom-btn');
      const exploreIcon = getByTestId('explore-bottom-btn');
      const mealIcon = getByTestId('food-bottom-btn');

      userEvent.click(drinkIcon);
      userEvent.click(exploreIcon);
      userEvent.click(mealIcon);

      const footer = getByTestId('footer');
      expect(footer).toBeInTheDocument();
    });

  it('if the user is redirected to a cocktail list when clicking on the drinks icon',
    () => {
      const { getByTestId } = RenderWithRouter(<Footer />, context);
      const clickDrink = getByTestId(/drinks-bottom-btn/i);

      userEvent.click(clickDrink);
      expect(clickDrink).toBeInTheDocument();

      const drink = getByTestId(/drinks/i);
      expect(drink).toBeInTheDocument();
    });

  it('if the user to is redirected to the explore screen when clicking the explore icon',
    () => {
      const { getByTestId } = RenderWithRouter(<Footer />, context);
      const clickExplore = getByTestId(/explore-bottom-btn/i);

      userEvent.click(clickExplore);
      expect(clickExplore).toBeInTheDocument();

      const explore = getByTestId(/explore/i);
      expect(explore).toBeInTheDocument();
    });

  it('if the user to is redirected to a list of foods when clicking on the food icon',
    () => {
      const { getByTestId } = RenderWithRouter(<Footer />, context);
      const clickFood = getByTestId(/food-bottom-btn/i);

      userEvent.click(clickFood);
      expect(clickFood).toBeInTheDocument();

      const food = getByTestId(/food/i);
      expect(food).toBeInTheDocument();
    });
});
