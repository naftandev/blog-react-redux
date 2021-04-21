import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import useModal from '../hooks/useModal';
import { getUsers } from '../actions/usersActions';
import { getToDos } from '../actions/toDosActions';
import postModal from '../actions/modalActions';
import ToDoListItem from '../components/ToDoListItem';
import ToDoItem from '../components/ToDoItem';
import DeleteToDoItem from '../components/DeleteToDoItem';
import Spinner from '../components/Spinner';
import Error from './Error';

import '../assets/styles/pages/ToDoList.scss';

const ToDoList = (props) => {
  const dispatch = useDispatch();
  const { loading, error, users, todos, modal } = useSelector(
    (state) => ({
      loading: state.loading.direct,
      error: state.error.page,
      users: state.users,
      todos: state.todos,
      modal: state.modal,
    }),
    shallowEqual
  );

  const userId = Number(props.match.params.id);
  const user = users.filter((user) => user.id === userId)[0];

  useEffect(async () => {
    await dispatch(getUsers());
    if (users) {
      dispatch(getToDos(userId));
    }
  }, []);

  if (error.origin) {
    return <Error origin={error.origin} message={error.message} />;
  }

  useModal(modal.isOpen);

  return (
    <>
      <main className='ToDoList'>
        {loading || !user ? (
          <Spinner />
        ) : !todos[userId] ? (
          <Spinner />
        ) : (
          <>
            <div className='ToDoList__details'>
              <figure className='ToDoList__image'></figure>
              <h1 className='ToDoList__title'>{user.name}'s to do list</h1>
            </div>
            <ul className='ToDoList__container'>
              <button
                className='btn'
                onClick={() =>
                  dispatch(
                    postModal({
                      title: 'Add to do',
                      isOpen: true,
                      reference: 'ToDoItem',
                      data: {
                        userId,
                        title: '',
                        completed: false,
                      },
                    })
                  )
                }
              >
                Add
              </button>
              <ToDoListItem userId={userId} />
            </ul>
          </>
        )}
      </main>
      {modal.isOpen && modal.reference === 'ToDoItem' && <ToDoItem />}
      {modal.isOpen && modal.reference === 'DeleteToDoItem' && (
        <DeleteToDoItem />
      )}
    </>
  );
};

export default ToDoList;
