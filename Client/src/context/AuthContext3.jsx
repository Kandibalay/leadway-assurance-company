import React, { useState, createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    user: null,
    token: '',
    // success: false,
    message: ''
  });

  // Set axios base URL from .env
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  // Set Authorization header when token changes
  useEffect(() => {
    if (auth?.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [auth?.token]);

  // Load auth from localStorage on mount
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setAuth(parsed);
      } catch (error) {
        console.error('Failed to parse auth from localStorage:', error);
        localStorage.removeItem('auth');
      }
    }
  }, []);

  // Login function
  // const login = async (userData) => {
  //   try {
  //     const { data } = await axios.post('/auth/signin', userData);

  //     if (!data?.error) {
  //       const newAuth = {
  //         user: data.user,
  //         token: data.token,
  //         success: data.success,
  //         message: data.message
  //       };

  //       setAuth(newAuth);
  //       localStorage.setItem('auth', JSON.stringify(newAuth));
  //       navigate('/');
  //       return data;
  //     } else {
  //       throw new Error(data.error);
  //     }
  //   } catch (error) {
  //     const message = error?.response?.data?.message || 'Login failed';
  //     console.error('Login error:', message);
  //     throw new Error(message);
  //   }
  // };

  // // Signup function
  // const signup = async (userData) => {
  //   try {
  //     const { data } = await axios.post('/auth/signup', userData);

  //     if (!data.error) {
  //       const newAuth = {
  //         user: data.user,
  //         token: data.token,
  //       //   success: data.success,
  //         message: data.message
  //       };

  //       setAuth(newAuth);
  //       localStorage.setItem('auth', JSON.stringify(newAuth));
  //       navigate('/auth/signin');
  //       return data;
  //     } else {
  //       throw new Error(data.error);
  //     }
  //   } catch (error) {
  //     const message = error?.response?.data?.message || 'Signup failed';
  //     console.error('Signup error:', message);
  //     throw new Error(message);
  //   }
  // };

  // // Forgot Password
  // const forgotPassword = async (email) => {
  //   try {
  //     const { data } = await axios.post('/auth/forgot-password', { email });
  //     return data;
  //   } catch (error) {
  //     throw new Error(error?.response?.data?.message || 'Failed to send reset email');
  //   }
  // };

  // // Reset Password
  // const resetPassword = async (resetToken, passwords) => {
  //   try {
  //     const { data } = await axios.put(`/auth/reset-password/${resetToken}`, passwords);
  //     return data;
  //   } catch (error) {
  //     throw new Error(error?.response?.data?.message || 'Reset failed');
  //   }
  // };

// Updated login function for your AuthContext
const login = async (userData) => {
  try {
    const { data } = await axios.post('/auth/signin', userData);

    if (data?.success) {
      const newAuth = {
        user: data.user,
        token: data.token,
        success: data.success,
        message: data.message
      };

      setAuth(newAuth);
      localStorage.setItem('auth', JSON.stringify(newAuth));
      navigate('/');
      return data;
    } else {
      // Handle case where success is false
      throw new Error(data.errMsg || data.message || 'Login failed');
    }
  } catch (error) {
    let message = 'Login failed';
    
    if (error.response?.data) {
      // Backend sends errMsg for errors, message for success
      message = error.response.data.errMsg || error.response.data.message || message;
    } else if (error.message) {
      message = error.message;
    }
    
    console.error('Login error:', message);
    throw new Error(message);
  }
};

// Also update other functions (signup, forgotPassword, resetPassword) to use errMsg:
const signup = async (userData) => {
  try {
    const { data } = await axios.post('/auth/signup', userData);

    if (data?.success) {
      const newAuth = {
        user: data.user,
        token: data.token,
        message: data.message
      };

      setAuth(newAuth);
      localStorage.setItem('auth', JSON.stringify(newAuth));
      navigate('/auth/signin');
      return data;
    } else {
      throw new Error(data.errMsg || data.message || 'Signup failed');
    }
  } catch (error) {
    const message = error?.response?.data?.errMsg || error?.response?.data?.message || 'Signup failed';
    console.error('Signup error:', message);
    throw new Error(message);
  }
};

const forgotPassword = async (email) => {
  try {
    const { data } = await axios.post('/auth/forgot-password', { email });
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.errMsg || error?.response?.data?.message || 'Failed to send reset email');
  }
};

const resetPassword = async (resetToken, passwords) => {
  try {
    const { data } = await axios.put(`/auth/reset-password/${resetToken}`, passwords);
    return data;
  } catch (error) {
    throw new Error(error?.response?.data?.errMsg || error?.response?.data?.message || 'Reset failed');
  }
};

  // Logout
  const logout = () => {
    localStorage.removeItem('auth');
    setAuth({
      user: null,
      token: '',
      success: false,
      message: ''
    });
    navigate('/auth/signin');
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

// Custom Hook
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
