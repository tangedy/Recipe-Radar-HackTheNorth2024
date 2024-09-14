// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';  // Flask server URL

// Function to get data from Flask
export const getFromFlask = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe?q=chicken`);
    return response.data;  // Return the data
  } catch (error) {
    console.error('Error fetching data from Flask:', error);
    throw error;
  }
};

// Function to submit data to Flask
export const submitToFlask = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/submit`, data);
    return response.data;  // Return the response from Flask
  } catch (error) {
    console.error('Error submitting data to Flask:', error);
    throw error;
  }
};