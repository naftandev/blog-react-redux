import types from '../actions/types';

const initialStates = {
  loading: false,
  error: {
    origin: null,
    message: null,
  },
  data: undefined,
};

export default (state = initialStates, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case types.ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };

    case types.GET_USERS:
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
      };

    default:
      return state;
  }
};
