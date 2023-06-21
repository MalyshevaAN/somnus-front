import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Friend from './Friend';
import './Friends.css';

const Friends = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fetchFriendsList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/subscriptions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const testData = [
            { email: 'friend1@example.com', userName: 'Друг 1' },
          ];
        // console.log(response.data)
        setFriendsList(response.data);
      } catch (error) {
        console.error('Ошибка при получении списка друзей:', error);
      }
    };
    fetchFriendsList();
  }, []);

  return (
    <div className='FriendsContainer'>
      {friendsList.map((friend) => (
        <Friend key={friend.email} email={friend.email} userName={friend.firstName + " " + friend.lastName} />
      ))}
    </div>
  );
};

export default Friends;
