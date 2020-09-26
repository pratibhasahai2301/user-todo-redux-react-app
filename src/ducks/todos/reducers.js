import { combineReducers } from 'redux';
import * as types from './types';

const todosInitialState = {
  todos: [],
  loading: false,
  error: {},
};

const todoReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case types.todosRequested:
      return {
        ...state,
        loading: true,
      };

    case types.todosReceived:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: {},
      };

    case types.todosRequestFailed:
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
  todoEntities: todoReducer,
});

export default reducer;