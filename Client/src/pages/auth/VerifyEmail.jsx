import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/icons/Logo.svg';

const VerifyEmail = () => {
  const { token } = useParams(); // Get the token from the URL
  const [status, setStatus] = useState('Verifying your email...');
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyEmailToken = async () => {
  //     try {
  //       const { data } = await axios.post(`/auth/verify-email/${token}`);
  //       if (data.success) {
  //         setStatus('Email verified successfully!');
  //         const timer = setInterval(() => {
  //           setCountdown((prevCountdown) => {
  //             if (prevCountdown <= 1) {
  //               clearInterval(timer);
  //               navigate('/signin');
  //               return 0;
  //             }
  //             return prevCountdown - 1;
  //           });
  //         }, 1000);
  //       }
  //     } catch (error) {
  //       setStatus(error.response?.data?.message || 'Verification failed');
  //     }
  //   };

  //   verifyEmailToken();
  // }, [token, navigate]);
  // console.log(token);
  useEffect(() => {
    const verifyEmailToken = async () => {
      try {
        console.log('Making request to:', `/auth/verify-email/${token}`);
        console.log('Token:', token);
        
        const { data } = await axios.post(`/auth/verify-email/${token}`);
        console.log('Response data:', data);
        
        if (data.success) {
          setStatus('Email verified successfully!');
          const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
              if (prevCountdown <= 1) {
                clearInterval(timer);
                navigate('/auth/signin');
                return 0;
              }
              return prevCountdown - 1;
            });
          }, 1000);
        } else {
          setStatus('Verification failed');
        }
      } catch (error) {
        console.error('Full error:', error);
        console.error('Error response:', error.response);
        setStatus(error.response?.data?.message || 'Verification failed');
      }
    };
  
    if (token) {
      verifyEmailToken();
    }
  }, [token, navigate]);

  return (
    <div className="forgot-password w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
     <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
     <div className="space-y-4">
        <NavLink to='/' className="flex justify-center mb-6">
        <img src={logo} alt="" className='w-[100px]' />
        </NavLink>
        <h1 className="text-2xl font-semibold mb-4">{status}</h1>
        {status === 'Email verified successfully!' && (
          <p className="text-lg">
            You will be redirected to the login page in{' '}
            <span className="font-bold">{countdown}s</span>.
          </p>
        )}
      </div>
     </div>
    </div>
  );
};

export default VerifyEmail;