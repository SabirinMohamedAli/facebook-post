import React, { useState } from 'react';
import './style.css';

const Post = (props) => {
  const { username, timestamp, context, image, contextImage } = props;
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentInput.trim()) {
      setComments((prevComments) => [...prevComments, commentInput]);
      setCommentInput('');
    }
  };

  const handleMoreOptions = () => {
    console.log('More options clicked');
  };

  const handleClosePost = () => {
    console.log('Close post clicked');
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={image} alt={`${username}'s profile`} className="profile" />
        <div className="username">{username}</div>
        <div className="time">{timestamp}</div>
        <div className="header-icons">
          <i className="fa-solid fa-ellipsis" onClick={handleMoreOptions}></i>
          <i className="fa-solid fa-xmark" onClick={handleClosePost}></i>
        </div>
      </div>
      <div className="context">{context}</div>
      <img src={contextImage} alt="Post context" className="image" />
      
      {showCommentForm && (
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={handleCommentChange}
          />
          <button type="submit" className="comment-submit">Post</button>
        </form>
      )}

      <div className="interaction-section">
        <div className="interactions">
          <i className="fa-solid fa-thumbs-up like-icon" onClick={handleLike}></i>
          <i className="fa-regular fa-comment comment-icon" onClick={toggleCommentForm}></i>
          <i className="fa-brands fa-whatsapp send-icon"></i>
          <i className="fa-solid fa-share share-icon"></i>
        </div>
        <div className="social-count">
          <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
        </div>
      </div>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default Post;
