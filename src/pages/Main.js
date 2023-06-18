import React, { useEffect, useState } from 'react';
import Header from '../components/header-auth';
import Sidebar from '../components/sidebar';
import StarsBackground from '../components/stars';
import Posts from '../components/posts';

const Main = () => {
    useEffect(() => {
        const isAuthenticated = true; // логика проверки аутентификации
    
        if (isAuthenticated) {
          console.log('Authenticated');
        }
      }, []);
    return (
        <>
            <Header />
            <Sidebar />
            <StarsBackground />
            <Posts />
        </>
    );
};

export default Main;