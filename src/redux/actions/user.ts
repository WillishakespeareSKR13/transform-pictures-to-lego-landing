import { IQuery } from 'graphql';

type UserState = IQuery['me'];

export const SetUser = (payload: UserState) => ({
  type: 'SETUSER',
  payload
});

export const UpdateUser = (payload: UserState) => ({
  type: 'UPDATEUSER',
  payload
});

export const Logout = () => ({
  type: 'LOGOUT'
});
