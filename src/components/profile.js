import React, { useState, useContext } from 'react';
import './profile.css';
import info from './info.png';
import bed from './bed.png';
import stat from './stat.png';
import friends from './friends.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

const Profile = () => {
  const [activeButton, setActiveButton] = useState('инфо о вас');
  const { userData } = useContext(AuthContext);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    console.log(userData)
  };

  return (
    <div className='profile'>
      <div className='profile-container'>
        <img
          className='profile-img'
          src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612275687_118-p-kot-na-fioletovom-fone-141.jpg'
        />
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
              мои друзья
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
          <p>{activeButton}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
