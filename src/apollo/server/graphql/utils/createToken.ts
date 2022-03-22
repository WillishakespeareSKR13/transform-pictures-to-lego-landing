import { IRole } from '@ApolloServer/models/roles';
import { IUser } from '@ApolloServer/models/users';
import { IStore } from '@ApolloServer/models/store';
import jwt from 'jsonwebtoken';

type IToken = IUser & {
  role: IRole;
  store: IStore;
};

const createToken = (user: IToken, secret: string, expiresIn: string) => {
  const {
    id,
    name,
    lastname,
    nickname,
    email,
    role,
    photo,
    emailVerified,
    birthdate,
    store
  } = user;
  return jwt.sign(
    {
      id,
      name,
      lastname,
      nickname,
      email,
      role,
      photo,
      emailVerified,
      birthdate,
      store
    },
    secret,
    { expiresIn }
  );
};

export default createToken;
