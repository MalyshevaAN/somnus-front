import React from 'react';
import Header from '../components/header-auth';
import StarsBackground from '../components/stars';
import Sidebar from '../components/sidebar';
import Profile from '../components/profile';

const ProfilePage = () => {
  return (
    <>
     <StarsBackground />
     <Header />
     <Sidebar />
     <Profile />
    </>
  );
};

export default ProfilePage;