import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError === true;
};

export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    });
    localStorage.setItem('token', response.data.jwt);
    return response.data.user;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Signup error:', error.response ? error.response.data : error.message);
    } else {
      console.error('Signup error:', error);
    }
    throw error;
  }
};

export const login = async (identifier: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    localStorage.setItem('token', response.data.jwt);
    return response.data.user;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Login error:', error.response ? error.response.data : error.message);
    } else {
      console.error('Login error:', error);
    }
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
    const response = await axios.get(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Get user profile error:', error.response ? error.response.data : error.message);
    } else {
      console.error('Get user profile error:', error);
    }
    throw error;
  }
};

export const updateUserProfile = async (userData: any) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const response = await axios.put(`${API_URL}/users/me`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Update user profile error:', error.response ? error.response.data : error.message);
    } else {
      console.error('Update user profile error:', error);
    }
    throw error;
  }
};