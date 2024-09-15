import './styles/RecipeItems.css'  
import React from 'react';

 

function DescriptionItems({values, title}){
    
    const valuesList = values.map(value => <li>{value}</li>)
    return (
        <div className="DescriptionItems">
            
            <div className="content">
                <ul>{valuesList}</ul>
               
                
            </div>
        </div>
      );
}



export default DescriptionItems;