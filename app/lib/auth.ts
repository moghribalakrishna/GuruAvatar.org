import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const login = async (identifier: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/local`, {
      identifier,
      password,
    });
    localStorage.setItem('token', response.data.jwt);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.get(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Get user profile error:', error);
    throw error;
  }
};