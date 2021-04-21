import types from './types';
import postModal from '../actions/modalActions';

const getToDos = (userId) => async (dispatch, getState) => {
  const toDos = getState().todos;

  if (!toDos[userId]) {
    dispatch({
      type: types.ERROR,
      payload: {
        origin: null,
        message: null,
      },
    });

    dispatch({
      type: types.LOADING,
      payload: true,
    });

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: types.GET_TODOS,
          payload: {
            userId,
            data,
          },
        });

        dispatch({
          type: types.LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: types.ERROR,
          payload: {
            origin: types.GET_TODOS,
            message: `Fetch error (${response.status})`,
          },
        });

        dispatch({
          type: types.LOADING,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: types.ERROR,
        payload: {
          origin: types.GET_TODOS,
          message: error.message,
        },
      });

      dispatch({
        type: types.LOADING,
        payload: false,
      });
    }
  }
};

const updateStatus = (userId, toDoId) => ({
  type: types.UPDATE_STATUS_TODO,
  payload: {
    userId,
    toDoId,
  },
});

const postToDo = () => async (dispatch, getState) => {
  const toDo = getState().modal.data;

  dispatch({
    type: types.ERROR_COMPONENT,
    payload: {
      origin: null,
      message: null,
    },
  });

  dispatch({
    type: types.LOADING_COMPONENT,
    payload: true,
  });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(toDo),
    });

    if (response.ok) {
      const data = await response.json();

      dispatch({
        type: types.POST_TODO,
        payload: data,
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });

      dispatch(postModal({}));
    } else {
      dispatch({
        type: types.ERROR_COMPONENT,
        payload: {
          origin: types.POST_TODO,
          message: `Fetch error (${response.status})`,
        },
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: types.ERROR_COMPONENT,
      payload: {
        origin: types.POST_TODO,
        message: error.message,
      },
    });

    dispatch({
      type: types.LOADING_COMPONENT,
      payload: false,
    });
  }
};

const putToDo = () => async (dispatch, getState) => {
  const toDo = getState().modal.data;

  dispatch({
    type: types.ERROR_COMPONENT,
    payload: {
      origin: null,
      message: null,
    },
  });

  dispatch({
    type: types.LOADING_COMPONENT,
    payload: true,
  });

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${toDo.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(toDo),
      }
    );

    if (response.ok) {
      const data = await response.json();

      dispatch({
        type: types.PUT_TODO,
        payload: data,
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });

      dispatch(postModal({}));
    } else {
      dispatch({
        type: types.ERROR_COMPONENT,
        payload: {
          origin: types.PUT_TODO,
          message: `Fetch error (${response.status})`,
        },
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: types.ERROR_COMPONENT,
      payload: {
        origin: types.PUT_TODO,
        message: error.message,
      },
    });

    dispatch({
      type: types.LOADING_COMPONENT,
      payload: false,
    });
  }
};

const deleteToDo = () => async (dispatch, getState) => {
  const toDo = getState().modal.data;

  dispatch({
    type: types.ERROR_COMPONENT,
    payload: {
      origin: null,
      message: null,
    },
  });

  dispatch({
    type: types.LOADING_COMPONENT,
    payload: true,
  });

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${toDo.id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.ok) {
      dispatch({
        type: types.DELETE_TODO,
        payload: {
          userId: toDo.userId,
          id: toDo.id,
        },
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });

      dispatch(postModal({}));
    } else {
      dispatch({
        type: types.ERROR_COMPONENT,
        payload: {
          origin: types.DELETE_TODO,
          message: `Fetch error (${response.status})`,
        },
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: types.ERROR_COMPONENT,
      payload: {
        origin: types.DELETE_TODO,
        message: error.message,
      },
    });

    dispatch({
      type: types.LOADING_COMPONENT,
      payload: false,
    });
  }
};

export { getToDos, updateStatus, postToDo, putToDo, deleteToDo };
