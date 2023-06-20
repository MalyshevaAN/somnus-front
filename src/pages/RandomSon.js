import React, { useEffect, useState } from 'react';
import Post from '../components/post';
import Header from '../components/header-auth';
import StarsBackground from '../components/stars';
import Sidebar from '../components/sidebar';
import axios from 'axios';
import '../components/posts.css';

const RandomSon = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:8080/dream/random',{headers: {Authorization: `Bearer ${token}`}})
      .then(response => {
        setPost(response.data);
        console.log(response.data) // Устанавливаем полученные данные в состояние
      })
      .catch(error => {
        console.error('Ошибка при получении списка постов:', error);
      });
  }, []);

  return (
    <>
    <Header />
    <StarsBackground />
    <Sidebar />
    <div className="posts-container">
      <div className="posts">
    {post ? (
      <Post
        key={post['id']}
        id={post['id']}
        authorid={post['authorId']}
        username={post['authorUsername']}
        date={post['dateCreation']}
        text={post['dreamText']}
        likes={post['likes']}
        comments={post['comments']}
      />
    ) : (
      <p>Loading...</p>
    )}
    </div>
    </div>
  </>
  );
};

export default RandomSon;

