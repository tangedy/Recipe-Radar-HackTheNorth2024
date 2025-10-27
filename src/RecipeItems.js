import DescriptionItems from './DescriptionItems';
import './styles/RecipeItems.css'
import React from 'react';
import './styles/EcoScore.css';
import './styles/divider.css';




function RecipeItem({ label, image, url, dietLabels, ingredients, calories, eco }) {
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

    const getEcoDescription = (score) => {
        switch(score) {
            case 'A+': return 'Excellent';
            case 'A': return 'Very Good';
            case 'B': return 'Good';
            case 'C': return 'Fair';
            case 'D': return 'Poor';
            case 'E': return 'Very Poor';
            case 'F': return 'Bad';
            case 'G': return 'Very Bad';
            default: return 'Unknown';
        }
    };

    return (
        <a 
            href={url} 
            className="RecipeItem"
            aria-label={`View recipe for ${label}. Calories: ${calories}. Dietary preferences: ${dietLabels.length > 0 ? dietLabels.join(", ") : "None specified"}. Environmental score: ${eco}.`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="content">
                <img 
                    src={image} 
                    className='Picture' 
                    alt={`${label} recipe`}
                    loading="lazy"
                />

                <div className='content-text'>
                    <h1>{label}</h1>

                    <DescriptionItems values={ingredients}></DescriptionItems>

                    <div className="recipe-stats">
                        <div className="calories-badge">
                            🔥 {calories} cal
                        </div>
                        
                        <div 
                            className="eco-score-box" 
                            style={{ borderColor: getEcoScoreColor(eco) }}
                            aria-label={`Environmental impact score: ${eco}`}
                            title={`Environmental impact: ${eco} (${getEcoDescription(eco)})`}
                        >
                            Eco: {eco}
                        </div>
                    </div>

                    {dietLabels.length > 0 && (
                        <div className="diet-labels" role="list" aria-label="Dietary preferences">
                            {dietLabels.map((label, index) => (
                                <span 
                                    key={index} 
                                    className="diet-badge"
                                    role="listitem"
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
}



export default RecipeItem;