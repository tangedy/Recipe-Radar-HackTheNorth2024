//import image from './images/test.png';
import DescriptionItems from './DescriptionItems';
import './styles/RecipeItems.css'  
import React from 'react';

 

function RecipeItem({label,image,url,dietLabels,ingredients,calories}){
    
    
    return (
        <a href={url}>
        <div className="RecipeItem">
            
            <div className="content">

                <img src={image} id='Pic' className='Picture'/>
                
               
                <div className='content-text'>
                    
                    <h1>Title: {label}</h1>
                    
                    <DescriptionItems values = {ingredients}></DescriptionItems>

                    <p>Calories: {calories}</p>
                    
                    <p>Diet Labels: {dietLabels}</p>
                </div>
                
            </div>
        </div>
        </a>
      );
}



export default RecipeItem;