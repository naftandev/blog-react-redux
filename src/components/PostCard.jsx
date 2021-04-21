import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

import Comments from './Comments';

import '../assets/styles/components/PostCard.scss';

const PostCard = ({ userId }) => {
  const posts = useSelector((state) => state.users).filter(
    (user) => user.id === userId
  )[0].posts;
  const [comments, setComments] = useState([]);

  const handleShowHideComments = (postId) => {
    const commentState = comments.filter((state) => state.postId === postId);

    if (commentState.length) {
      const isOpen = commentState[0].isOpen ? false : true;
      const commentStateIndex = comments.findIndex(
        (state) => state.postId === postId
      );

      const updatedStates = [...comments];
      updatedStates[commentStateIndex] = {
        postId: postId,
        isOpen: isOpen,
      };

      return setComments(updatedStates);
    }

    return setComments(
      comments.concat({
        postId: postId,
        isOpen: true,
      })
    );
  };

  return posts.map((post) => (
    <div className='PostCard' key={post.id}>
      <figure className='PostCard__post'>
        <FontAwesomeIcon icon={faReadme} />
        <figcaption>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button type='button' onClick={() => handleShowHideComments(post.id)}>
            View comments
          </button>
        </figcaption>
      </figure>
      {comments.filter((state) => state.postId === post.id).length > 0 &&
        comments.filter((state) => state.postId === post.id)[0].isOpen && (
          <Comments userId={userId} postId={post.id} />
        )}
    </div>
  ));
};

export default PostCard;
