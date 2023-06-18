import React, { useState } from 'react';
import './post.css';
import like from './like.png';
import liked from './liked.png';
import comment from './comment.png';
import arrow from './arrow.png';

const Post = ({ avatar, username, date, text, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [postComments, setPostComments] = useState([]);

  const handleLike = () => {
    if (isLiked) {
      // Отправить запрос в бэкенд, чтобы убрать лайк //
      setIsLiked(false);
    } else {
      // Отправить запрос в бэкенд, чтобы добавить лайк //
      setIsLiked(true);
    }
  };

  const handleCommentInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Отправить запрос в бэкенд с комментарием commentInput //
    const newComment = {
      id: postComments.length + 1,
      text: commentInput,
    };
    setPostComments([...postComments, newComment]);
    setCommentInput('');
    setShowComments(false);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
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


