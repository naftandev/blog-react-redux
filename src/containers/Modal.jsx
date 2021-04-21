import React from 'react';
import ReactDOM from 'react-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import postModal from '../actions/modalActions';

import '../assets/styles/containers/Modal.scss';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { error, modal } = useSelector(
    (state) => ({
      error: state.error.component,
      modal: state.modal,
    }),
    shallowEqual
  );

  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <button
          className='Modal__close'
          type='button'
          onClick={() => dispatch(postModal({}))}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className='Modal__title'>{modal.title}</h2>
        {children}
        {error.origin && (
          <div className='error-component'>
            <strong>ERROR</strong>
            <p>
              <span>ORIGIN:</span> {error.origin}
            </p>
            <p>
              <span>MESSAGE:</span> {error.message}
            </p>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
