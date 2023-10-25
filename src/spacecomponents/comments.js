import React, { useState, useEffect } from 'react';
import '../style/form.css';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('myAppComments'));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myAppComments', JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      const timestamp = Date.now();
      setComments([...comments, { id: timestamp, text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="main-container">
      <div className="comment-container">
        <input
          type="text"
          name="notes"
          placeholder="Leave a comment..."
          maxLength="500"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button className="submit" type="button" onClick={handleCommentSubmit}>
          Comment
        </button>
      </div>
      <h3 className="comment-h2">Comments</h3>
      <div className="comment-box">
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentBox;
