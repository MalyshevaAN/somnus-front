import React from 'react';
import SendForm from '../components/sonForm';
import Header from '../components/header-auth';
import StarsBackground from '../components/stars';
import Sidebar from '../components/sidebar';

const SendSon = () => {
  const handleSubmit = (dreamText) => {
    // Здесь будет бэкенд - отправка сна на сервер
    console.log('Отправка сна на сервер:', dreamText);
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
