import React, { useState } from 'react';
import './post.css';
import like from './like.png';
import liked from './liked.png';
import comment from './comment.png';
import friend from './friends.png';
import friendAdded from './friends.png';
import arrow from './arrow.png';
import axios from 'axios';


const Post = ({id, authorid, avatar, username, date, text, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const token = localStorage.getItem('token');

  const updateLikes = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.put(`http://localhost:8080/dream/like/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status==200) window.location.reload();
    } catch (error) {
      console.error('Ошибка при обновлении лайков:', error);
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
    updateLikes();
  };

  const submitComment = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/dream/comment/add/${id}`, {commentText:commentInput}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status==200) window.location.reload();
    } catch (error) {
      console.error('Ошибка при отправке комментария:', error);
    }
  };


  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const formatDate = (date) => {


// Получение отдельных компонентов даты и времени
    const formattedDate = date.slice(0, 10)
    return formattedDate
  }

  const handleSubmitComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: postComments.length + 1,
      text: commentInput,
    };
    setPostComments([...postComments, newComment]);
    setCommentInput('');
    setShowComments(false);
    submitComment();
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const addFriend = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/user/follow/${authorid}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status==200) window.location.reload();
    } catch (error) {
      console.error('Ошибка при добавлении в друзья:', error);
    }
  };

  const removeFriend = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/user/unfollow/${authorid}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status==200) window.location.reload();
    } catch (error) {
      console.error('Ошибка при удалении из друзей:', error);
    }
  };
  const handleToggleFriend = () => {
    setIsFriend(!isFriend);
    if (isFriend) {
      removeFriend();
    } else {
      addFriend();
    }
  };

  return (
    <div className="post">
      <span className="username">{username}</span>
      <span className="date">{formatDate(date)}</span>
      <div className="content">
        <div className="text">{text}</div>
        <div className="interactions">
          <span className="likes" onClick={handleLike}>
            {likes} {isLiked ? (
              <img src={liked} alt="Liked" />
            ) : (
              <img src={like} alt="Like" />
            )}
          </span>
          <span className="friends" onClick={handleToggleFriend}>
            <img src={isFriend ? friendAdded : friend} alt="Friend" />
          </span>
          <span className="comments" onClick={handleToggleComments}>
            {comments} <img src={comment} alt="Comment" />
          </span>
        </div>
        {showComments && (
          <div className="comment-section">
            <form className='formComment' onSubmit={handleSubmitComment}>
              <input
                className='sendComment'
                type="text"
                value={commentInput}
                onChange={handleCommentInputChange}
                placeholder="напишите ваш коментарий, но будьте вежливы :)"
              />
              <button type='submit'>
                отправить <img src={arrow} alt='Arrow' />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;


