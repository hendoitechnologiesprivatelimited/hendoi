import axios from 'axios';

const API_URL = '/.netlify/functions';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendContactForm = async (formData) => {
  try {
    const response = await api.post('/api', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
};

export default api;