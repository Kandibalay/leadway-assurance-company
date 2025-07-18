'use client'
import { useState, createContext, useContext, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// Create context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: '',
    success: false,
    message: ''
  });
  const navigate = useNavigate();

  // Set base URL for axios
  axios.defaults.baseURL = import.meta.env.VITE_MY_API_KEY;;

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // Retrieve the user from cookies
  useEffect(() => {
    const data = Cookies.get('auth');
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
        success: parsedData.success,
        message: parsedData.message
      });
    }
  }, []);

  const login = async (userData) => {
    try {
      const { data } = await axios.post('/auth/login', userData);

      if (!data?.error) {
        setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        Cookies.set('auth', JSON.stringify(data));
        navigate('/');
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Login error:', error?.response?.data?.message);
      throw new Error(error?.response?.data?.message || 'An error occurred while logging in');
    }
  };

  const signup = async (userData) => {
    try {
      const { data } = await axios.post('/auth/register', userData);

      if (!data.error) {
        setAuth({ user: data.user, token: data.token, success: data.success, message: data.message });
        Cookies.set('auth', JSON.stringify(data), { expires: 7 }); // Cookie expires in 7 days
        navigate('/auth/login');
      } else {
        console.log(data.error);
      }

      return data;
    } catch (error) {
      console.log('Signup Error:', error);
      throw new Error(error?.response?.data?.message || 'An error occurred while signing up');
    }
  };
  const forgotPassword = async (email) => {
    try {
      const { data } = await axios.post('/auth/forgotpassword', { email });
      return data;
    } catch (error) {
      console.log('Forgot Password Error:', error);
      throw new Error(error?.response?.data?.message || 'An error occurred while sending reset email');
    }
  };

  const resetPassword = async (resetToken, passwords) => {
    try {
      const { data } = await axios.put(`/auth/resetpassword/${resetToken}`, passwords);
      return data;
    } catch (error) {
      console.log('Reset Password Error:', error);
      throw new Error(error?.response?.data?.message || 'An error occurred while resetting password');
    }
  };
  const logout = () => {
    Cookies.remove('auth');
    setAuth('');
    navigate('/auth/login');
  };
  

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup,resetPassword, forgotPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };