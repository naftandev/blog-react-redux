import { combineReducers } from 'redux';

import loading from './loadingReducer';
import error from './errorReducer';
import users from './usersReducer';
import todos from './toDosReducer';
import modal from './modalReducer';

export default combineReducers({
  loading,
  error,
  users,
  todos,
  modal,
});
