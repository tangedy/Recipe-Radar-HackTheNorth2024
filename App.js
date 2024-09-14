import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import RecipeList from './RecipeList.js';
//import './styles/App.css';

function App() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/recipe?q=chicken')
      .then(response => {
        setData;
      })
  }, []);

  const submitData = () => {
    const data = {
      message: 'wazzup'

    };};
    /*axios.post('http://127.0.0.1:5000/recipe', data)
      .then(response => {
        console.log(response.data.status);
      })
      .catch(error => {
        console.log(error);
      });
    };*/

  return (
    <div className="App">
      <h1>React and Flask Integration</h1>

        {/* Display data fetched from Flask */}
        <div>
          <h2>Data from Flask:</h2>
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>

        {/* Button to send POST request to Flask */}
        <div>
          <button onClick={submitData}>Submit Data to Flask</button>
          <p>{message}</p>
        </div>
      <header className="content">
        <p>Hello World</p>
      </header>
    </div>
  );
}

export default App;
