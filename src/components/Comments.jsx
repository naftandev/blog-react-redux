import React from 'react';

import CommentItem from './CommentItem';

import '../assets/styles/components/Comments.scss';

const Comments = ({ userId, postId }) => (
  <div className='Comments'>
    <h2>Comments</h2>
    <ul>
      <CommentItem userId={userId} postId={postId} />
    </ul>
  </div>
);

export default Comments;
