import types from '../actions/types';

const initialState = {
  page: {
    origin: null,
    message: null,
  },
  component: {
    origin: null,
    message: null,
  },
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case types.ERROR:
      return {
        ...state,
        page: action.payload,
      };

    case types.ERROR_COMPONENT:
      return {
        ...state,
        component: action.payload,
      };

    default:
      return state;
  }
};

export default error;
