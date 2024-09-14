import React, { useState, useEffect } from 'react';
import axios from 'axios'
import RecipeList from './RecipeList.js';
import './styles/App.css';


function App() {
  const[searchQuery, setSearchQuery] = useState('');
  const[error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userQuery = await axios.get(`http://127.0.0.1:5000/recipe?q=${searchQuery}`);
      setData(userQuery.data);
    } catch (err) {
      console.error('Error searching', err);

    }
  }

  return (
    <div className="App">
      <header className="content">
        <form onSubmit={handleSearch}>  
          <input 
          type="text" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for recipes"
            />
          <button type='submit'>Search</button>
          
        </form>
        <RecipeList recipes={data}></RecipeList>

      </header>

    </div>
  );
}
//array --> dictionary entires : array
export default App;
