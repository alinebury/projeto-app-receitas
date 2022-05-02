import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './Styles/Body.css';
import RecipesProvider from './Context/RecipesProvider';
import Login from './Pages/Login';
import Foods from './Pages/Foods';
import DetailRecipes from './Pages/DetailRecipes';
import NotFound from './Pages/NotFound';
import Drinks from './Pages/Drinks';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import DoneRecipes from './Pages/DoneRecipes';
import Explore from './Pages/Explore';
import ExploreDrinks from './Pages/ExploreDrink';
import ExploreDrinkIngredients from './Pages/ExploreDrinkIngredients';
import ExploreFood from './Pages/ExploreFood';
import ExploreFoodIngredients from './Pages/ExploreFoodIngredients';
import ExploreFoodNationalities from './Pages/ExploreFoodNationalities';
import Profile from './Pages/Profile';

function App() {
  return (
    <RecipesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodNationalities }
          />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/foods/:id" component={ DetailRecipes } />
          <Route exact path="/drinks/:id" component={ DetailRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFood } />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodIngredients }
          />
          <Route exact path="/explore/foods/:id" component={ ExploreFood } />
          <Route
            exact
            path="/explore/foods/:id/in-progress"
            component={ ExploreFood }
          />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinkIngredients }
          />
          <Route exact path="/explore/drinks/:id" component={ ExploreDrinks } />
          <Route
            exact
            path="/explore/drinks/:id/in-progress"
            component={ ExploreDrinks }
          />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </RecipesProvider>
  );
}

export default App;
