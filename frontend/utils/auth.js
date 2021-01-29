import axios from 'axios';
import jwt_decode from 'jwt-decode';

const setAuthToken = (token) => {
  if(token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const isAuthenticated = () => {
  localStorage.getItem('token') ? true : false;
}

export async function login(userData) {
  // set token and return user info
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    /* todo: proxy? */
    const response = await axios.post('http://localhost:5000/api/v1/auth/login', userData, config);
    const { token } = response.data;
    localStorage.setItem('token', token);
    setAuthToken(token);
    return jwt_decode(token);
  } catch (err) {
    console.error(err.message);
  }
}

export function logout() {
  // remove token if it exists
  if(localStorage.getItem('token')){
    localStorage.removeItem('token');
    setAuthToken();
  }
}