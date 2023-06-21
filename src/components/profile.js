import React, { useState, useContext } from 'react';
import './profile.css';
import info from './info.png';
import bed from './bed.png';
import stat from './stat.png';
import friends from './friends.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';
import Friends from './Friends';

const Profile = () => {
  const [activeButton, setActiveButton] = useState('инфо о вас');
  const [showFriends, setShowFriends] = useState(false);
  const { userData } = useContext(AuthContext);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    setShowFriends(buttonText === 'мои друзья');
    console.log(userData)
  };
  const token = localStorage.getItem('token')
  console.log(userData)
  const imageUrl = userData.url;
  console.log(userData)
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('userAvatar', file);
    try {
      const response = await axios.post('http://localhost:8080/user/avatar',formData, {headers: {
        Authorization: `Bearer ${token}`,
      },
    } );
      imageUrl = response.data['avatarPath'];
      console.log('URL изображения:', imageUrl);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  return (
    <div className='profile'>
      <div className='profile-container'>
        <div className='imgContainer'>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <img
            className='profile-img'
            src={imageUrl}
          />
        </div>
        <p className='name'>{userData && userData.email}</p>
        <div className='buttons-conteiner'>
          <div className='btn'>
            <button
              className='btn-button'
              onClick={() => handleButtonClick(userData && userData.userName)}
            >
              <img src={info} />
              {userData && userData.userName}
            </button>
          </div>
          <div className='btn'>
            <button className='btn-button' onClick={() => handleButtonClick('мои сны')}>
              <img src={bed} />
              мои сны
            </button>
          </div>
          <div className='btn'>
            <button className='btn-button' onClick={() => handleButtonClick('мои друзья')}>
              <img src={friends} />
              мои подписки
            </button>
          </div>
          <div className='btn'>
            <button className='btn-button' onClick={() => handleButtonClick('моя статистика')}>
              <img src={stat} />
              моя статистика
            </button>
          </div>
          <div className='btn-lnk'>
            <Link className='btn-link' to='/Main'>
              назад в ленту
            </Link>
          </div>
        </div>
        <div className='profile-info'>
          {activeButton === 'мои друзья' && showFriends && <Friends />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
