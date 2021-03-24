import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getUsers } from '../actions/usersActions';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import Error from './Error';

import '../assets/styles/pages/Users.scss';

const Users = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state) => ({
      loading: state.users.loading,
      error: state.users.error,
      data: state.users.data,
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
      <figure className='Users__image'></figure>
      <h1 className='Users__title'>Users</h1>
      <div className='Users__container'>
        {loading || !data ? <Loader /> : <UserCard />}
      </div>
    </main>
  );
};

export default Users;
