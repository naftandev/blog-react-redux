import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { postToDo, putToDo } from '../actions/toDosActions';
import postModal from '../actions/modalActions';
import Modal from '../containers/Modal';
import Spinner from '../components/Spinner';

import '../assets/styles/components/ToDoItem.scss';

const ToDoItem = () => {
  const dispatch = useDispatch();
  const { loading, modal } = useSelector(
    (state) => ({
      loading: state.loading.byAction,
      modal: state.modal,
    }),
    shallowEqual
  );

  const formDataHandle = (event) => {
    dispatch(
      postModal({
        ...modal,
        data: {
          ...modal.data,
          [event.target.name]: event.target.value,
        },
      })
    );
  };

  const saveHandle = () => {
    modal.data.id ? dispatch(putToDo()) : dispatch(postToDo());
  };

  const submitHandle = (event) => {
    event.preventDefault();
  };

  const disableHandle = () => {
    if (!modal.data.title) {
      return true;
    }

    if (loading) {
      return true;
    }

    return false;
  };

  return (
    <Modal>
      <div className='ToDoItem'>
        <form className='ToDoItem__form' onSubmit={submitHandle}>
          <input
            type='text'
            placeholder='Type your to do...'
            name='title'
            value={modal.data.title}
            onChange={formDataHandle}
          />
          <div className='btn-container'>
            <button
              className='btn'
              type='submit'
              onClick={saveHandle}
              disabled={disableHandle()}
            >
              <span>Save</span>
            </button>
            {loading && <Spinner />}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ToDoItem;
