import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { updateStatus } from '../actions/toDosActions';
import postModal from '../actions/modalActions';

import '../assets/styles/components/ToDoListItem.scss';

const ToDoListItem = ({ userId }) => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.todos)[userId];

  return toDos.map((toDo) => (
    <li className='ToDoListItem' key={toDo.id}>
      <input
        type='checkbox'
        id={`checkbox-${toDo.id}`}
        checked={toDo.completed}
        onChange={() => dispatch(updateStatus(userId, toDo.id))}
      />
      <label
        className='ToDoListItem__checkbox'
        htmlFor={`checkbox-${toDo.id}`}
      ></label>
      <div className='ToDoListItem__details'>
        <p>{toDo.title}</p>
      </div>
      <div className='ToDoListItem__options'>
        <button
          className='icon icon--edit'
          type='button'
          onClick={() =>
            dispatch(
              postModal({
                title: 'Edit to do',
                isOpen: true,
                reference: 'ToDoItem',
                data: {
                  id: toDo.id,
                  userId: toDo.userId,
                  title: toDo.title,
                  completed: toDo.completed,
                },
              })
            )
          }
        >
          <FontAwesomeIcon className='icon--ToDoListItem' icon={faEdit} />
        </button>
        <button
          className='icon icon--warning'
          type='button'
          onClick={() =>
            dispatch(
              postModal({
                title: 'You sure want to delete this to do?',
                isOpen: true,
                reference: 'DeleteToDoItem',
                data: {
                  id: toDo.id,
                  userId: toDo.userId,
                },
              })
            )
          }
        >
          <FontAwesomeIcon className='icon--ToDoListItem' icon={faTrashAlt} />
        </button>
      </div>
    </li>
  ));
};

export default ToDoListItem;
