import React from 'react';
import RecipeItem from './RecipeItems.js';
import './styles/RecipeList.css';  
import pcImage from './images/placeholder.png';

function RecipeList({recipes}) {
    return (
        <div className="RecipeList">
            {recipes && recipes.length > 0 ? (recipes.map((recipe, index) => (
                <RecipeItem 
                    key={index}
                    image={recipe.image}
                    label={recipe.label}
                    url={recipe.url}
                    dietLabels={recipe.dietLabels}
                    ingredients={recipe.ingredients}
                    calories={recipe.calories}
                    eco={recipe.eco}
                />
            ))) : (<img className = 'placeholder' src={pcImage} alt=""/>)}
        </div>
    );
}

export default RecipeList;