import DescriptionItems from './DescriptionItems';
import './styles/RecipeItems.css'  
import React from 'react';
import './styles/EcoScore.css';
import './styles/divider.css';


 

function RecipeItem({label,image,url,dietLabels,ingredients,calories,eco}){
    const getEcoScoreColor = (eco) => {
        switch (eco) {
          case 'A+':
            return 'green';   // Best
          case 'A':
            return '#76c7c0'; // Light green
          case 'B':
            return '#add8e6'; // Lighter blue
          case 'C':
            return 'yellow';  // Yellowish
          case 'D':
            return '#ffcc00'; // Orange
          case 'E':
            return '#ff8c00'; // Dark orange
          case 'F':
            return 'red';     // Worst
          case 'G':
            return 'darkred';     
          default:
            return 'gray';    // Default for unknown scores
        }
      };
    
    return (
        <a href={url}>
        <div className="RecipeItem">
            
            <div className="content">

                <img src={image} id='Pic' className='Picture'/>
                
               
                <div className='content-text'>
                    
                    <h1>{label}</h1>
                    
                    <DescriptionItems values = {ingredients}></DescriptionItems>

                    <p>Calories: {calories}</p>
                    
                    <p>Dietary Label: {dietLabels}</p>

                    <div className="eco-score-box" style={{ borderColor: getEcoScoreColor(eco)}}>
                    Eco Score: {eco}
                    </div>
                </div>
                
            </div>
        </div>
        </a>
      );
}



export default RecipeItem;