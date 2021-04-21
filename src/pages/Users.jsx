import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getUsers } from '../actions/usersActions';
import UserCard from '../components/UserCard';
import Spinner from '../components/Spinner';
import Error from './Error';

import '../assets/styles/pages/Users.scss';

const Users = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state) => ({
      loading: state.loading.direct,
      error: state.error.page,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (error.origin) {
    return <Error origin={error.origin} message={error.message} />;
  }

  return (
    <main className='Users'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='Users__details'>
            <figure className='Users__image'></figure>
            <h1 className='Users__title'>Users list</h1>
          </div>
          <div className='Users__container'>
            <UserCard />
          </div>
        </>
      )}
    </main>
  );
};

export default Users;
