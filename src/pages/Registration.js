import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import StarsBackground from '../components/stars';
import RegistrationForm from '../components/reg';
import axios from 'axios';

const Registration = () => {
  const [avatar, setAvatar] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'confirmPassword' && value !== password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    switch (name) {
      case 'avatar':
        setAvatar(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'birthDate':
        setBirthDate(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    const userData = {
      "email":email,
  "password":password,
  "passwordConfirm":confirmPassword,
  "firstName":firstName,
  "lastName":lastName
    };

    axios.post('http://localhost:8080/user/auth/register', userData).then((response) => {
        console.log(response.data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error(error);
      });
    navigate('/Login');
  };

  return (
    <>
      <Header />
      <StarsBackground />
      <RegistrationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        avatar={avatar}
        firstName={firstName}
        lastName={lastName}
        email={email}
        birthDate={birthDate}
        password={password}
        confirmPassword={confirmPassword}
      />
    </>
  );
};

export default Registration;

