import React, {useContext} from 'react';
import SendForm from '../components/sonForm';
import Header from '../components/header-auth';
import StarsBackground from '../components/stars';
import Sidebar from '../components/sidebar';
import axios from 'axios';
import { AuthContext } from '../components/AuthContext';


const SendSon = () => {
  const { userData } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  const handleSubmit = async (dreamText) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/dream/add',
        {
          dreamText: dreamText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log('Отправка сна на сервер:', response.data);
      } else {
        console.log('Ошибка при отправке сна');
      }
    } catch (error) {
      console.log('Ошибка при отправке сна:', error);
    }
  };

  const user = {
    name: userData.firstName + " " + userData.lastName,
    avatar: userData.url,
  };

  return (
    <div>
      <Header />
      <StarsBackground />
      <Sidebar />
      <SendForm onSubmit={handleSubmit} user={user} />
    </div>
  );
};

export default SendSon;
