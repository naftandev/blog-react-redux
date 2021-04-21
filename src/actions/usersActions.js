import types from './types';

const getUsers = () => async (dispatch, getState) => {
  const users = getState().users;

  if (!users.length > 0) {
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
        'https://jsonplaceholder.typicode.com/users'
      );

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: types.GET_USERS,
          payload: data,
        });

        dispatch({
          type: types.LOADING,
          payload: false,
        });
      } else {
        dispatch({
          type: types.ERROR,
          payload: {
            origin: types.GET_USERS,
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
          origin: types.GET_USERS,
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

const getPosts = (userId) => async (dispatch, getState) => {
  const users = getState().users;
  const user = users.filter((user) => user.id === userId)[0];

  if (!user.posts) {
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
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );

      if (response.ok) {
        const data = await response.json();

        const userIndex = users.findIndex((user) => user.id === userId);

        dispatch({
          type: types.GET_POSTS,
          payload: {
            userIndex,
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
            origin: types.GET_POSTS,
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
          origin: types.GET_POSTS,
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

const getComments = (userId, postId) => async (dispatch, getState) => {
  const users = getState().users;
  const user = users.filter((user) => user.id === userId)[0];
  const posts = user.posts;
  const post = posts.filter((post) => post.id === postId)[0];

  if (!post.comments) {
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
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );

      if (response.ok) {
        const data = await response.json();

        const userIndex = users.findIndex((user) => user.id === userId);
        const postIndex = posts.findIndex((post) => post.id === postId);

        dispatch({
          type: types.GET_COMMENTS,
          payload: {
            userIndex,
            postIndex,
            data,
          },
        });

        dispatch({
          type: types.LOADING_COMPONENT,
          payload: false,
        });
      } else {
        dispatch({
          type: types.ERROR_COMPONENT,
          payload: {
            origin: types.GET_COMMENTS,
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
          origin: types.GET_COMMENTS,
          message: error.message,
        },
      });

      dispatch({
        type: types.LOADING_COMPONENT,
        payload: false,
      });
    }
  }
};

export { getUsers, getPosts, getComments };
