import types from '../actions/types';

const initialStates = [];

const getToDos = (state = initialStates, action) => {
  let newState;
  let toDoIndex;
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...state,
        [action.payload.userId]: action.payload.data,
      };

    case types.UPDATE_STATUS_TODO:
      toDoIndex = state[action.payload.userId].findIndex(
        (todo) => todo.id === action.payload.toDoId
      );
      newState = Object.assign([], {
        ...state[action.payload.userId],
        [toDoIndex]: {
          ...state[action.payload.userId][toDoIndex],
          completed: !state[action.payload.userId][toDoIndex].completed,
        },
      });
      return {
        ...state,
        [action.payload.userId]: newState,
      };

    case types.POST_TODO:
      const toDosLength = state[action.payload.userId].filter(
        (todo) => todo.userId === action.payload.userId
      ).length;
      const newToDo = action.payload;
      newToDo.id = toDosLength + 1;
      newState = [newToDo];
      newState.push(...state[action.payload.userId]);
      return {
        ...state,
        [action.payload.userId]: newState,
      };

    case types.PUT_TODO:
      toDoIndex = state[action.payload.userId].findIndex(
        (todo) => todo.id === action.payload.id
      );
      return {
        ...state,
        [action.payload.userId]: Object.assign([], {
          ...state[action.payload.userId],
          [toDoIndex]: action.payload,
        }),
      };

    case types.DELETE_TODO:
      toDoIndex = state[action.payload.userId].findIndex(
        (todo) => todo.id === action.payload.id
      );
      newState = [...state[action.payload.userId]];
      newState.splice(toDoIndex, 1);
      return {
        ...state,
        [action.payload.userId]: newState,
      };

    default:
      return state;
  }
};

export default getToDos;
