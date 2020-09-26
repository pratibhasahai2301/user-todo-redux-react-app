import * as types from './types';

export const usersRequested = () => {
  return {
    type: types.usersRequested,
    meta: {
      onSuccess: types.usersReceived,
      onError: types.usersRequestFailed,
      path: 'users',
      method: 'GET',
      async: true,
      blocking: true
    },
  }
};
