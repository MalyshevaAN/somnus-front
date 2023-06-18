import React, { useState } from 'react';
import './reg.css';
import arrow from './arrow.png';
import cloud from './cloud.png';

const RegistrationForm = ({
  firstName,
  lastName,
  email,
  birthDate,
  password,
  confirmPassword,
  handleChange,
  handleSubmit,
}) => {
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    handleChange(event);

    // Проверка совпадения паролей
    if (name === 'confirmPassword' && value !== password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div className='registration'>
      <form onSubmit={handleSubmit}>
        <img src={cloud}/>
        <div className='element'>
          <input
            type='text'
            id='firstName'
            name='firstName'
            placeholder='Имя'
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='element'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            placeholder='Фамилия'
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='element'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='element'>
          <input type='date' id='birthDate' name='birthDate' value={birthDate} onChange={handleChange} required />
        </div>
        <div className='element'>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Пароль'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='element'>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Повторите пароль'
            value={confirmPassword}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <span className='error-message'>Пароли не совпадают</span>}
        </div>
        <button type='submit'>
          Зарегистрироваться <img src={arrow} alt='Arrow' />
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;