import React, { useState, useEffect } from 'react';

import RecipeList from './RecipeList.js';
import './styles/App.css';


function App() {
  
  
  return (
    <div className="App">
      <header className="content">
        <p>Hello World</p>
        <RecipeList></RecipeList>
      </header>
    </div>
  );
}

export default App;
