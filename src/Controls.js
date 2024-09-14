//import './styles/Controls.css'  
import React, { useState, useEffect } from 'react';




const Controls = ({ searchQuery, setSearchQuery, handleSearch , dropDownOption,setDropDownOption, mealType,setMealType}) => {

    const dropDownHealth = (e) => {
        setDropDownOption(e.target.value);
      };
      const healthOptions = [{value: 'crustacean-free', label: 'Shellfish Free'},
                              {value: 'dairy-free', label: 'Dairy Free'},
                              {value: 'egg-free', label: 'Egg Free'},
                              {value: 'fish-free', label: 'Fish Free'},
                              {value: 'gluten-free', label: 'Gluten Free'},
                              {value: 'peanut-free', label: 'Peanut Free'},
                              {value: 'soy-free', label: 'Soy Free'},
                              {value: 'vegan', label: 'Vegan'},
                              {value: 'vegetarian', label: 'Vegetarian'},
                              {value: 'wheat-free', label: 'Wheat Free'},
                              {value: 'kosher', label: 'Kosher'}
      ];
    
      const mealTypeButtons = (mealType) => {
        setMealType(mealType);
      }
      
    return (
        <div className = 'Controls'>
            
            <form onSubmit={handleSearch}>
                <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes"
                />
                <button type="submit">Search</button>
            </form>

            <label htmlFor="healthOptions">Choose an option: </label>
            <select id="healthOptions" value={dropDownOption} onChange={dropDownHealth}>
                <option value="">--Please choose an option--</option>
                {healthOptions.map((healthOptions) => (
                <option key={healthOptions.value} value={healthOptions.value}>
                    {healthOptions.label}
                </option>
                ))}
            </select>

            <div style={{ marginTop: '30px' }}>
            <button
            type="button"
            onClick={() => mealTypeButtons('breakfast')}
            style={{backgroundColor: mealType === 'breakfast' ? 'blue' : 'white'}}
            >
            Breakfast
            </button>
            <button
            type="button"
            onClick={() => mealTypeButtons('lunch')}
            style={{backgroundColor: mealType === 'lunch' ? 'blue' : 'white'}}
            >
            Lunch
            </button>
            <button
            type="button"
            onClick={() => mealTypeButtons('dinner')}
            style={{backgroundColor: mealType === 'dinner' ? 'blue' : 'white'}}
            >
            Dinner
            </button>
            </div>
        
        
        </div>
    );
  };



export default Controls;