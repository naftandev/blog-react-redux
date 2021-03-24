import types from './types';

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: types.LOADING,
    payload: {
      loading: true,
    },
  });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok) {
      const data = await response.json();

      dispatch({
        type: types.GET_USERS,
        payload: {
          loading: false,
          data: data,
        },
      });
    } else {
      dispatch({
        type: types.ERROR,
        payload: {
          loading: false,
          error: {
            origin: types.GET_USERS,
            message: `Fetch error (${response.status})`,
          },
        },
      });
    }
  } catch (error) {
    dispatch({
      type: types.ERROR,
      payload: {
        loading: false,
        error: {
          origin: types.GET_USERS,
          message: error.message,
        },
      },
    });
  }
};
