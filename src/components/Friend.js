import React from 'react';
import './Friend.css';
import cloud from './cloud.png';

const Friend = ({ email, userName }) => {
  return (
    <div className='FriendConteiner'>
      <img src={cloud}></img>
      <p id='email'>{email}</p>
      <p id='name'>{userName}</p>
    </div>
  );
};

export default Friend;
