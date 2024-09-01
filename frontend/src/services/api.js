import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; //i will replace it later

export const create = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

//for updation
export const update = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

//  to get a record by ID
export const getById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// to get all records from an endpoint
export const getAll = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

//  to delete a record by ID
export const remove = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};
