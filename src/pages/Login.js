import React, { useState } from 'react';
import Header from '../components/header';
import StarsBackground from '../components/stars';
import Enter from '../components/enter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    /*if (email === 'test@test.com' && password === 'test') {
      navigate('/Main');
    } else {
      // Показать сообщение об ошибке ввода
    }*/
    try {
      const response = await axios.post('http://localhost:8080/user/auth/login', { email:email,
      password:password });
      if (response.status === 200) {
        // console.log(response)
        // console.log(response.data)
        // console.log(response.data['accessToken'])
        const token = response.data['accessToken'];
        localStorage.setItem('token', token); // Сохранение токена в localStorage
        navigate('/Main');
      } else {
        console.log("error: go back");
      }
    } catch (error) {
      // Обработка ошибки AJAX-запроса
    }
  };

  return (
    <>
      <Header />
      <StarsBackground />
      <Enter handleLogin={handleLogin} />
    </>
  );
};

export default Login;










