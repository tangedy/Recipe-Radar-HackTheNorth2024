import React from 'react';
import RecipeItem from './RecipeItems.js';
import './styles/RecipeList.css';  
import pcImage from './images/placeholder.png';

function RecipeList({recipes}) {
    return (
          <div className="RecipeList">
            {recipes && recipes.length > 0 ? (
                recipes.map((recipe, index) => (
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
                ))
            ) : (
                <div className="placeholder" role="status" aria-live="polite">
                    <img src={pcImage} alt="Recipe search illustration" />
                    <div className="placeholder-text">Ready to find delicious recipes?</div>
                    <div className="placeholder-subtext">
                        Search for recipes above and use filters to find meals that fit your dietary needs and preferences.
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeList;