import { Reducer } from 'redux';
import cookies from 'js-cookie';

export type UserReducerType = {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
  role: {
    id: string;
    name: string;
  };
  photo: string;
  emailVerified: boolean;
  birthdate: string;
};

const TypesReducers = {
  SETUSER: (_: UserReducerType, payload: UserReducerType) => payload,
  UPDATEUSER: (
    state: UserReducerType,
    payload: UserReducerType
  ): UserReducerType => ({
    ...state,
    ...payload
  }),
  LOGOUT: () => {
    cookies.remove('bearer');
    return initialState;
  }
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: UserReducerType;
};

export const initialState = {} as UserReducerType;

export const UserReducer: Reducer<UserReducerType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default UserReducer;
