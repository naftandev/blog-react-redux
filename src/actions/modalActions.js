import types from './types';

const postModal = (payload) => (dispatch) => {
  dispatch({
    type: types.ERROR_COMPONENT,
    payload: {
      origin: null,
      message: null,
    },
  });

  dispatch({
    type: types.POST_MODAL,
    payload,
  });
};

export default postModal;
