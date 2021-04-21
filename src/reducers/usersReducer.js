import types from '../actions/types';

const initialStates = [];

const getUsers = (state = initialStates, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return action.payload;

    case types.GET_POSTS:
      return Object.assign([...state], {
        [action.payload.userIndex]: {
          ...state[action.payload.userIndex],
          posts: action.payload.data,
        },
      });

    case types.GET_COMMENTS:
      return Object.assign([...state], {
        [action.payload.userIndex]: {
          ...state[action.payload.userIndex],
          posts: Object.assign([...state[action.payload.userIndex].posts], {
            [action.payload.postIndex]: {
              ...state[action.payload.userIndex].posts[
                action.payload.postIndex
              ],
              comments: action.payload.data,
            },
          }),
        },
      });

    default:
      return state;
  }
};

export default getUsers;
