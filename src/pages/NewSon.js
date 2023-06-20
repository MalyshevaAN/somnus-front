import React from 'react';
import SendForm from '../components/sonForm';
import Header from '../components/header-auth';
import StarsBackground from '../components/stars';
import Sidebar from '../components/sidebar';
import axios from 'axios';

const SendSon = () => {
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
        // Здесь вы можете обработать успешный ответ от сервера
      } else {
        console.log('Ошибка при отправке сна');
        // Здесь вы можете обработать ошибку при отправке сна
      }
    } catch (error) {
      console.log('Ошибка при отправке сна:', error);
      // Здесь вы можете обработать ошибку AJAX-запроса
    }
  };

  const user = {
    name: 'test@test.com',
    avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612275687_118-p-kot-na-fioletovom-fone-141.jpg',
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
