import * as types from './types';

export const todosRequested = (userId) => {
  return {
    type: types.todosRequested,
    meta: {
      onSuccess: types.todosReceived,
      onError: types.todosRequestFailed,
      path: `todos?userId=${userId}`,
      method: 'GET',
      async: true,
      blocking: true
    },
  }
};
