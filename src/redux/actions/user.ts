type UserState = {
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
