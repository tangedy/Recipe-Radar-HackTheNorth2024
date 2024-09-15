import React from 'react';
import RecipeItem from './RecipeItems.js';
import './styles/RecipeList.css';  

function RecipeList({recipes}) {
    return (
        <div className="RecipeList">
            {recipes && recipes.length > 0 ? (recipes.map((recipe, index) => (
                <RecipeItem 
                    image={recipe.image}
                    label={recipe.label}
                    url={recipe.url}
                    dietLabels={recipe.dietLabels}
                    ingredients={recipe.ingredients}
                    calories={recipe.calories}
                    eco={recipe.eco}
                />
            ))) : (<p>No recipes available</p>)}
        </div>
    );
}

export default RecipeList;