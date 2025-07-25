import './styles/Controls.css'  
import React, { useState, useEffect } from 'react';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';


const Controls = ({ searchQuery, setSearchQuery, handleSearch , dropDownOption,setDropDownOption, mealType, setMealType, dishType, setDishType, ecoScore, setEcoScore}) => {
    
    const dropDownHealth = (e) => {
        setDropDownOption(e.target.value);
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
            default: return '';
        }
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
 
          <div className="form-group">
            <form onSubmit={handleSearch} role="search" aria-label="Recipe search form">
              <label htmlFor="searchInput" className="sr-only">
                Search for recipes
              </label>
              <input 
                id="searchInput"
                type="text" 
                value={searchQuery} 
                className="form-control"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for recipes (e.g., pasta, chicken, vegetarian)"
                aria-describedby="search-help"
                autoComplete="off"
              />
              <div id="search-help" className="sr-only">
                Enter keywords to search for recipes. You can search by ingredient, dish name, or cuisine type.
              </div>
              <button 
                type="submit" 
                className="btn btn-custom"
                aria-label="Search for recipes"
              >
                Search
              </button>
            </form>
          </div>
          
          {/* Dietary Restrictions Section */}
          <div className="dietary-section">
            <label htmlFor="healthOptions">
              Dietary Restrictions & Allergies
            </label>
            <select 
              id="healthOptions" 
              value={dropDownOption} 
              onChange={dropDownHealth}
              className="form-control"
              aria-describedby="dietary-help"
            >
              <option value="">All dietary preferences</option>
              {healthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
                ))}
            </select>
            <div id="dietary-help" className="sr-only">
              Filter recipes based on dietary restrictions and allergies. This helps find safe options for your specific needs.

            </div>
                   </div>
          {/* Meal Type Section */}
          <div className="meal-type-section">
            <div className="section-title">Meal Type</div>
            <div className="meal-type-buttons" role="group" aria-label="Select meal type">
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => mealTypeButtons('breakfast')}
                style={{backgroundColor: mealType === 'breakfast' ? 'lightblue' : 'white'}}
                aria-pressed={mealType === 'breakfast'}
                aria-label="Filter for breakfast recipes"
              >
                🌅 Breakfast
              </button>
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => mealTypeButtons('lunch')}
                style={{backgroundColor: mealType === 'lunch' ? 'lightblue' : 'white'}}
                aria-pressed={mealType === 'lunch'}
                aria-label="Filter for lunch recipes"
              >
                🌞 Lunch
              </button>
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => mealTypeButtons('dinner')}
                style={{backgroundColor: mealType === 'dinner' ? 'lightblue' : 'white'}}
                aria-pressed={mealType === 'dinner'}
                aria-label="Filter for dinner recipes"
              >
                🌙 Dinner
              </button>
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => mealTypeButtons('snack')}
                style={{backgroundColor: mealType === 'snack' ? 'lightblue' : 'white'}}
                aria-pressed={mealType === 'snack'}
                aria-label="Filter for snack recipes"
              >
                🍎 Snack
              </button>
            </div>
                     {/* Dish Type Section */}
            <div className="section-title" style={{marginTop: '16px'}}>Special Categories</div>
            <div className="dish-type-row" role="group" aria-label="Select dish category">
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => dishTypeButtons('desserts')}
                style={{backgroundColor: dishType === 'desserts' ? 'lightblue' : 'white'}}
                aria-pressed={dishType === 'desserts'}
                aria-label="Filter for dessert recipes"
              >
                🍰 Dessert
              </button>
              <button
                type="button"
                className="btn btn-custom-hover"
                onClick={() => dishTypeButtons('drinks')}
                style={{backgroundColor: dishType === 'drinks' ? 'lightblue' : 'white'}}
                aria-pressed={dishType === 'drinks'}
                aria-label="Filter for drink recipes"
              >
                🥤 Drinks
              </button>
            </div>
            </div>

         {/* Eco Score Section */}
          <div className="eco-section">
            <label htmlFor="ecoOptions">
              Environmental Impact
            </label>
            <select 
              id="ecoOptions" 
              value={ecoScore} 
              onChange={dropDownEco}
              className="form-control"
              aria-describedby="eco-help"
            >
              <option value="">All environmental ratings</option>
              {ecoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} - {getEcoDescription(option.value)}
                </option>
                ))}
            </select>
             <div id="eco-help" className="sr-only">
              Filter recipes by their environmental impact score. A+ is the most eco-friendly, G is the least.
            </div>
          </div>
        </div>
        
        
    );
  };



export default Controls;