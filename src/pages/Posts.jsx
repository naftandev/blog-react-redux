import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getUsers } from '../actions/usersActions';
import { getPosts } from '../actions/usersActions';
import PostCard from '../components/PostCard';
import Spinner from '../components/Spinner';
import Error from './Error';

import '../assets/styles/pages/Posts.scss';

const Posts = (props) => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(
    (state) => ({
      loading: state.loading.direct,
      error: state.error.page,
      users: state.users,
    }),
    shallowEqual
  );

  const userId = Number(props.match.params.id);
  const user = users.filter((user) => user.id === userId)[0];

  useEffect(async () => {
    await dispatch(getUsers());
    dispatch(getPosts(userId));
  }, []);

  if (error.origin) {
    return <Error origin={error.origin} message={error.message} />;
  }

  return (
    <main className='Posts'>
      {loading || !user ? (
        <Spinner />
      ) : !user.posts ? (
        <Spinner />
      ) : (
        <>
          <div className='Posts__details'>
            <figure className='Posts__image'></figure>
            <h1 className='Posts__title'>{user.name}'s posts</h1>
          </div>
          <div className='Posts__container'>
            <PostCard userId={userId} />
          </div>
        </>
      )}
    </main>
  );
};

export default Posts;
