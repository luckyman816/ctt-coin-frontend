import axios from 'axios';
const api = axios.create({
    baseURL: `https://mike-token-backend-1.onrender.com/api`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default api;