import React, { useState, useEffect } from 'react';
import axios from 'axios'
import RecipeList from './RecipeList.js';
import './styles/App.css';


function App() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');

  const userQuery = 'http://127.0.0.1:5000/recipe?q=chicken';
  // Fetch data from Flask API when the component mounts
  useEffect(() => {
    fetch(userQuery)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="content">

        <p>Not World</p>
        <RecipeList></RecipeList>
      </header>
      <div className="content">
        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
}

export default App;
