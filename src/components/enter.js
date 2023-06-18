import React, { useState } from 'react';
import './enter.css';
import arrow from './arrow.png';
import cloud from './cloud.png';


const Enter = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setError(false); // Сброс ошибки при изменении полей
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (email === 'test@test.com' && password === 'test') {
    handleLogin(email, password);
    setError(false);
    // } else {
    //   setError(true);
    //   setTimeout(() => {
    //     setError(false);
    //   }, 3000);
    // }
  };

  return (
    <div className={`enter ${error ? 'error' : ''}`}>
      <form onSubmit={handleSubmit}>
        <img src={cloud} alt="Cloud" />
        <div className='element'>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} placeholder='Введите email' required />
        </div>
        <div className='element'>
          <input type="password" id="password" name="password" value={password} onChange={handleChange} placeholder='Введите пароль' required />
        </div>
        <button type="submit">Войти<img src={arrow} alt="Arrow" /></button>
      </form>
      {error && <p className={`error-message ${error ? '' : 'hide'}`}>Неправильный пароль. Попробуйте еще раз.</p>}
    </div>
  );
};

export default Enter;





