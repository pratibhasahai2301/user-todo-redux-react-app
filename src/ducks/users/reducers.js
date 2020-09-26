import { combineReducers } from 'redux';
import * as types from './types';

const usersInitialState = {
  users: [],
  loading: false,
  error: {},
};

const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case types.usersRequested:
      return {
        ...state,
        loading: true,
      };

    case types.usersReceived:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: {},
      };

    case types.usersRequestFailed:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return {...state};
  }
};

const reducer = combineReducers({
  userEntities: userReducer,
});

export default reducer;