import React, { useEffect, useState } from 'react';
import { fetchFoodNationalities, fetchFoodsByNationalities,
  fetchFoods } from '../Api/foodsAPI';
import CardRecipe from './CardRecipe';

function ExploreNationalites() {
  const [nationalities, setNationalities] = useState([]);
  const [foods, setFoods] = useState([]);
  const [nationalitie, setNationalitie] = useState('All');
  const fetchAPI = async () => {
    const nat = await fetchFoodNationalities();
    setNationalities(nat);
  };
  const fetchFood = async (natio) => (natio === 'All' ? (
    setFoods(await fetchFoods())) : (
    setFoods(await fetchFoodsByNationalities(natio)))
  );
  const MAX_RECIPES = 12;

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    if (nationalities.length === 0) return;
    fetchFood(nationalitie);
  }, [nationalities, nationalitie]);

  return (
    <>
      <select
        data-testid="explore-by-nationality-dropdown"
        value={ nationalitie }
        onChange={ (e) => setNationalitie(e.target.value) }
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        { nationalities.length > 0 && (
          nationalities.map((item, index) => (
            <option
              key={ index }
              data-testid={ `${item.strArea}-option` }
              value={ item.strArea }
            >
              { item.strArea }
            </option>))
        ) }
      </select>
      <div className="aq">
        { foods.length > 0 && (
          foods.slice(0, MAX_RECIPES).map((item, index) => (
            <CardRecipe
              key={ index }
              index={ index }
              testid={ `${index}-recipe-card` }
              recipe={ item }
            />
          ))
        ) }
      </div>
    </>
  );
}

export default ExploreNationalites;
