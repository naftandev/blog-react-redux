import types from '../actions/types';

const initialState = {
  direct: false,
  byAction: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        direct: action.payload,
      };

    case types.LOADING_COMPONENT:
      return {
        ...state,
        byAction: action.payload,
      };

    default:
      return state;
  }
};

export default loading;
