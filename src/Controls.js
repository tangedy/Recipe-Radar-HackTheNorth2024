import './styles/Controls.css'  
import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';


const Controls = ({ searchQuery, setSearchQuery, handleSearch , dropDownOption,setDropDownOption, mealType, setMealType, dishType, setDishType, ecoScore, setEcoScore}) => {
    
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
    const dropDownEco = (f) => {
        setEcoScore(f.target.value);
      }

      const ecoOptions = [{value: 'A+', label: 'A+'},
                          {value: 'A', label: 'A'},
                          {value: 'B', label: 'B'},
                          {value: 'C', label: 'C'},
                          {value: 'D', label: 'D'},
                          {value: 'E', label: 'E'},
                          {value: 'F', label: 'F'},
                          {value: 'G', label: 'G'}
      ];
    
    
      const mealTypeButtons = (mealType) => {
        setMealType(mealType);
      }

      const dishTypeButtons = (dishType) => {
        setDishType(dishType);
      }

      
    return (
      
      
        <div className = 'Controls'>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet"/>
          <div className="header-container" style={{display: 'flex', gap: '20px'}}>
            <img 
              style={{width: '30%',height:'fit-content'}}
              src={logo2}
              alt="Header Image"
              className="header-image"
            />
            <h2 className="header-text">Recipe Radar</h2>
          </div>
          <div style={{width:'80%'}}>

          

          <div style={{ marginTop: '20%', width: '80%' }}/>
          
            <div className="form-group">
                <form onSubmit={handleSearch}>
                <div style={{width: '95%'}}>
                <input 
                type="text" 
                value={searchQuery} 
                className="form-control"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes"
                />
                </div>
                <button type="submit" className="btn btn-custom">Search</button>
                
                </form>
                </div>
            </div>    
            <div style={{ marginTop: '30px' , width: '80%'}}>
            <label htmlFor="healthOptions">Dietary Restrictions: </label>
            <select id="healthOptions" value={dropDownOption} 
            onChange={dropDownHealth}
            className="form-control"
>
                <option value="">--None--</option>
                {healthOptions.map((healthOptions) => (
                <option key={healthOptions.value} value={healthOptions.value}>
                    {healthOptions.label}
                </option>
                ))}
            </select>
            </div>
            <div className="row">
            <div className='meal-type-buttons'style={{ marginTop: '20px'}}>
            <button
            type="button"
            className="btn btn-custom-hover"         
             onClick={() => mealTypeButtons('breakfast')}
            style={{backgroundColor: mealType === 'breakfast' ? 'lightblue' : 'white', width: '120px'}}
            >
            Breakfast
            </button>
            <div class="divider"></div>
            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => mealTypeButtons('lunch')}
            style={{backgroundColor: mealType === 'lunch' ? 'lightblue' : 'white', width: '120px'}}
            >
            Lunch
            </button>
            <div class="divider"></div>
            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => mealTypeButtons('dinner')}
            style={{backgroundColor: mealType === 'dinner' ? 'lightblue' : 'white', width: '120px'}}
            >
            Dinner 
            </button>
            </div>

            <div className="row mt-2">
            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => mealTypeButtons('snack')}
            style={{backgroundColor: mealType === 'snack' ? 'lightblue' : 'white', width: '120px'}}
            >
            Snack
            </button>
            
            <div class="divider"></div>

            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => dishTypeButtons('desserts')}
            style={{backgroundColor: dishType === 'desserts' ? 'lightblue' : 'white', width: '120px'}}
            >
            Dessert
            </button>
            <div class="divider"></div>

            <button
            type="button"
            //className={`btn btn-${mealType === 'dinner' ? 'light-blue' : 'white'}`}
            className="btn btn-custom-hover"         
            onClick={() => dishTypeButtons('drinks')}
            style={{backgroundColor: dishType === 'drinks' ? 'lightblue' : 'white', width: '120px'}}
            >
            Drink
            </button>
            </div>
            </div>

            <div style={{ marginTop: '30px' , width: '80%'}}>
            <label htmlFor="ecoOptions">Eco Score: </label>
            <select id="ecoOptions" value={ecoScore} 
            onChange={dropDownEco}
            className="form-control"
>
                <option value="">--None--</option>
                {ecoOptions.map((ecoOptions) => (
                <option key={ecoOptions.value} value={ecoOptions.value}>
                    {ecoOptions.label}
                </option>
                ))}
            </select>
            </div>
        </div>
        
        
    );
  };



export default Controls;