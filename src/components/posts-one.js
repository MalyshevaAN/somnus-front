import React, { useEffect, useState } from 'react';
import Post from './post';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const temporaryData = [
      {
        id: 1,
        avatar: 'https://crosti.ru/patterns/00/17/01/73_picture_e6ef3066.jpg',
        username: 'user1',
        date: '2023-05-01',
        text: 'я вроде бы проснулась (ппопвла в сонную воронку), мать говорит пошли нулять. а я просыпалась насильно с криком чтобы выбраться из сонной воронки. тут выглядываем за окно а там у машиного дома начинается ураган смерч фиолетовый, вертолет чето поднимает и ставит у нашего дома типа спас, а перед домом лужайка ваще как на даче. до этого во сне я поняла, что это сон, тк костя сказал: возьми кошелек и пойди дверь открой, я подхожу смотрю в глазок и не виду ничего. понимаю что это замочная скважина смотрю на глазок и понимаю что дверь не наша. начинаю кртчать чтобы пооснуться. еще у нас вместе с пилюлей....',
        likes: 10,
        comments: 5
      }
    ];

    setPosts(temporaryData);
  }, []);

  return (
    <div className="posts-container">
      <div className="posts">
        {posts.map(post => (
          <Post
            key={post.id}
            avatar={post.avatar}
            username={post.username}
            date={post.date}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;

