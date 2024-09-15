import './styles/Controls.css'  
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
            
            <form onSubmit={handleSearch} className="mt-4">
              <div className="form-group">
                <input 
                type="text" 
                value={searchQuery} 
                className="form-control"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes"
                />
                </div>
  
                <div style={{ marginTop: '10px' }}></div>

                <button type="submit" className="btn btn-custom">Search</button>
                
            </form>
            <div style={{ marginTop: '30px' }}></div>
            <label htmlFor="healthOptions">Dietary Restrictions: </label>
            <select id="healthOptions" value={dropDownOption} 
            onChange={dropDownHealth}
            className="form-control"
>
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
            className="btn btn-custom-hover"         
             onClick={() => mealTypeButtons('breakfast')}
            style={{backgroundColor: mealType === 'breakfast' ? 'aquamarine' : 'white'}}
            >
            Breakfast
            </button>
            <button
            type="button"
            //className={`btn btn-${mealType === 'lunch' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => mealTypeButtons('lunch')}
            style={{backgroundColor: mealType === 'lunch' ? 'aquamarine' : 'white'}}
            >
            Lunch
            </button>
            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         

            onClick={() => mealTypeButtons('dinner')}
            style={{backgroundColor: mealType === 'dinner' ? 'aquamarine' : 'white'}}
            >
            Dinner
            </button>
            </div>
        </div>
        
        
    );
  };



export default Controls;