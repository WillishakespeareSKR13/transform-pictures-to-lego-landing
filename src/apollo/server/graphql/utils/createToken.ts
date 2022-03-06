import { IRole } from '@ApolloServer/models/roles';
import { IUser } from '@ApolloServer/models/users';
import jwt from 'jsonwebtoken';

type IToken = IUser & {
  role: IRole;
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
    birthdate
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
      birthdate
    },
    secret,
    { expiresIn }
  );
};

export default createToken;
