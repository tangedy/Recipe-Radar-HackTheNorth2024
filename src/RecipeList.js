import React from 'react';
import RecipeItem from './RecipeItems.js';
import './styles/RecipeList.css';  

function RecipeList() {
    return (
        <div className="RecipeList">
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
        </div>
    );
}

export default RecipeList;