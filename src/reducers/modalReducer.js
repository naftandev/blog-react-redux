import types from '../actions/types';

const initialState = {};

const postModal = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_MODAL:
      return {
        ...state,
        title: action.payload.title,
        isOpen: action.payload.isOpen,
        reference: action.payload.reference,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default postModal;
