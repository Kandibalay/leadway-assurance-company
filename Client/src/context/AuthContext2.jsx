import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    user: null,
    token: '',
    success: false,
    message: ''
  });

  // Set base URL for axios from Vite env
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  // Update axios auth header when token changes
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // Load auth from cookie on mount
  useEffect(() => {
    const data = Cookies.get('auth');
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setAuth({
          user: parsedData.user,
          token: parsedData.token,
          success: parsedData.success,
          message: parsedData.message
        });
      } catch (error) {
        console.error('Error parsing auth data from cookies:', error);
        Cookies.remove('auth');
      }
    }
  }, []);

  // Login function
  const login = async (userData) => {
    try {
      const { data } = await axios.post('/auth/sign-in', userData);

      if (!data?.error) {
        setAuth({
          user: data.user,
          token: data.token,
          success: data.success,
          message: data.message
        });

        Cookies.set('auth', JSON.stringify(data), {
          expires: 7,
          secure: true,
          sameSite: 'strict'
        });

        navigate('/');
        return data;
      } else {
        throw new Error(data.error);
      }

    } catch (error) {
      const message = error?.response?.data?.message || 'An error occurred while logging in';
      console.error('Login error:', message);
      setAuth((prev) => ({ ...prev, message }));
      throw new Error(message);
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      const { data } = await axios.post('/auth/sign-up', userData);

      if (!data.error) {
        setAuth({
          user: data.user,
          token: data.token,
          success: data.success,
          message: data.message
        });

        Cookies.set('auth', JSON.stringify(data), {
          expires: 7,
          secure: true,
          sameSite: 'strict'
        });

        navigate('/auth/sign-in');
        return data;
      } else {
        throw new Error(data.error);
      }

    } catch (error) {
      const message = error?.response?.data?.message || 'An error occurred while signing up';
      console.error('Signup error:', message);
      setAuth((prev) => ({ ...prev, message }));
      throw new Error(message);
    }
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    try {
      const { data } = await axios.post('/auth/forgotpassword', { email });
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || 'An error occurred while sending reset email';
      console.error('Forgot Password error:', message);
      throw new Error(message);
    }
  };

  // Reset Password
  const resetPassword = async (resetToken, passwords) => {
    try {
      const { data } = await axios.put(`/auth/resetpassword/${resetToken}`, passwords);
      return data;
    } catch (error) {
      const message = error?.response?.data?.message || 'An error occurred while resetting password';
      console.error('Reset Password error:', message);
      throw new Error(message);
    }
  };

  // Logout function
  const logout = () => {
    Cookies.remove('auth');
    setAuth({
      user: null,
      token: '',
      success: false,
      message: ''
    });
    navigate('/auth/login');
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        login,
        signup,
        forgotPassword,
        resetPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
