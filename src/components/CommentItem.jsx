import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getComments } from '../actions/usersActions';
import Spinner from './Spinner';

import '../assets/styles/components/CommentItem.scss';

const CommentItem = ({ userId, postId }) => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(
    (state) => ({
      loading: state.loading.byAction,
      error: state.error.component,
      users: state.users,
    }),
    shallowEqual
  );

  const posts = users.filter((user) => user.id === userId)[0].posts;
  const comments = posts.filter((post) => post.id === postId)[0].comments;

  useEffect(() => {
    dispatch(getComments(userId, postId));
  }, []);

  if (error.origin) {
    return (
      <div className='error-component'>
        <strong>ERROR</strong>
        <p>
          <span>ORIGIN:</span> {error.origin}
        </p>
        <p>
          <span>MESSAGE:</span> {error.message}
        </p>
      </div>
    );
  }

  if (loading && !comments) {
    return <Spinner />;
  }

  if (comments) {
    return comments.map((comment) => (
      <li className='CommentItem' key={comment.id}>
        <figure></figure>
        <div>
          <span>{comment.email}</span>
          <p>{comment.body}</p>
        </div>
      </li>
    ));
  }

  return <Spinner />;
};

export default CommentItem;
