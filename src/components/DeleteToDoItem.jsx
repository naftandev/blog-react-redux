import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { deleteToDo } from '../actions/toDosActions';
import postModal from '../actions/modalActions';
import Modal from '../containers/Modal';
import Spinner from '../components/Spinner';

import '../assets/styles/components/DeleteToDoItem.scss';

const DeleteToDoItem = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.byAction);

  const disableHandle = () => {
    if (loading) {
      return true;
    }

    return false;
  };

  return (
    <Modal>
      <div className='DeleteToDoItem'>
        <div className='btn-container'>
          <button
            className='btn btn--warning'
            type='button'
            onClick={() => dispatch(deleteToDo())}
            disabled={disableHandle()}
          >
            Delete
          </button>
          {loading && <Spinner />}
        </div>
        <button
          className='btn'
          type='button'
          onClick={() => dispatch(postModal({}))}
          disabled={disableHandle()}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteToDoItem;
