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
      },
      {
        id: 2,
        avatar: 'https://pixelbox.ru/wp-content/uploads/2022/05/smeshoy-kotik-avatar-pixelbox.ru-15-768x768.jpg',
        username: 'user2',
        date: '2023-05-02',
        text: 'короче начало сна я не помню, потом почему-то я была одна у дк. еще мы были у какого-то пруда и я уронила в него сумку которую недавно купила два раза по приколу это было ночью. потом я пошла гулять с вами и почему-то мой телефон был у хаткевич дома, я как раз до него дошла и начался дождь. а ее дом был у дк. и я зашла спрятаться от дождя, а там выходили актеры из дк и они в костюмах каких-то иввнов дураков, змеев горынычей и так далее. и короче они меня прогоняли, а там выше по ступенькам сидели какие-то мужики противные не хотелас ними сидеть. и тут появляетесь ты настя аня климановп и хатка...',
        likes: 5,
        comments: 2
      },
      {
        id: 3,
        avatar: 'https://fanibani.ru/images/wp-content/uploads/2021/09/162-8.jpg',
        username: 'user3',
        date: '2023-05-03',
        text: 'Текст поста 3',
        likes: 3,
        comments: 1
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

