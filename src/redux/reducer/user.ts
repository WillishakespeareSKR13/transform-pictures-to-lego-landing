import { Reducer } from 'redux';
import cookies from 'js-cookie';

export type UserReducerType = {
  id: string;
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
  disabled: boolean;
  birthdate: Date;
  store: {
    id: string;
    name: string;
    description: string;
    phone: string;
    email: string;
    website: string;
    photo: string;
    street: string;
    cash: number;
    currency: string;
    city: string;
    state: string;
    zip: string;
    storeType: {
      id: string;
      name: string;
    };
  }[];
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
