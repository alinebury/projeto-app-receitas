import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
// import { useHistory } from 'react-router-dom';

function ListDoreRecipes() {
  // const history = useHistory();
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [renderRecipes, setRenderRecipes] = useState([]);

  // pontos de melhoria:
  // 1 - colocar o localStorege no arquivo correto
  // 2 - criar um componente para o Card
  // 3 - criar um aqruivo css para modificar a largura da imagem do card

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setDoneRecipes(recipes);
    setRenderRecipes(recipes);
  }, []);

  // console.log(renderRecipes);
  // console.log(doneRecipes);

  const handleButtonAll = () => {
    setRenderRecipes(doneRecipes);
  };

  const handleButtonFood = () => {
    setRenderRecipes(doneRecipes.filter((recipe) => recipe.type === 'food'));
  };

  const handleButtonDrink = () => {
    setRenderRecipes(doneRecipes.filter((recipe) => recipe.type === 'drink'));
  };

  const handleButtonShare = (type, id) => {
    navigator.clipboard.writeText(`http://localhost:3000/${`${type}s/${id}`}`);
    setIsCopied((prev) => !prev);
  };

  return (
    <div>
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          onClick={ handleButtonAll }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          onClick={ handleButtonFood }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          onClick={ handleButtonDrink }
        >
          Drinks
        </button>
      </div>
      {renderRecipes.length > 0 && renderRecipes
        .map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `${recipe.type}s/${recipe.id}` }>
              <img
                width="100%"
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ recipe.name }
              />
            </Link>
            { recipe.type === 'food' ? (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {`${recipe.nationality} - ${recipe.category} `}
              </p>
            ) : (
              <p data-testid={ `${index}-horizontal-top-text` }>
                {recipe.alcoholicOrNot}
              </p>) }
            <button
              type="button"
              src={ shareIcon }
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ () => handleButtonShare(recipe.type, recipe.id) }
            >
              {isCopied ? 'Link copied!' : <img src={ shareIcon } alt="shareIcon" />}
            </button>
            <Link to={ `${recipe.type}s/${recipe.id}` }>
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
            <p>
              {recipe.tags.length > 0 && recipe.tags
                .slice(0, 2).map((tag) => (
                  <span
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </span>
                ))}
            </p>
          </div>
        ))}
    </div>
  );
}

export default ListDoreRecipes;
