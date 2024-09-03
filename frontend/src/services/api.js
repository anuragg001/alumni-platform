import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; //i wiil change it later 


const handleError = (error) => {
  if (error.response) {
  
    console.error('Error response:', error.response);
  } else if (error.request) {
 
    console.error('Error request:', error.request);
  } else {

    console.error('Error message:', error.message);
  }
  throw error;
};

export const create = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const update = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getById = async (endpoint, id) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getAll = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const remove = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};