import { Resolvers } from '@apollo/client';
import bcryptjs from 'bcryptjs';
import Users from '../../models/users';
import createToken from '../utils/createToken';

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, ctx) => {
      if (!ctx.user) {
        throw new Error('You are not logged in');
      }
      return ctx.user;
    },
    getUsers: async (_, __) => {
      return await Users.find({});
    },
    getUserById: async (_, { id }) => {
      return await Users.findById(id).populate('role');
    }
  },
  Mutation: {
    newUser: async (_, { input }) => {
      const { email, password } = input;
      const userExist = await Users.findOne({ email });
      if (userExist) throw new Error('User already exist');

      const hashedPassword = await bcryptjs.hash(password, 10);
      const user = await Users.create({
        ...input,
        password: hashedPassword
      });
      return user;
    },

    login: async (_, { input }) => {
      const { email, password } = input;

      const userExist = await Users.findOne({ email }).populate('role');
      if (!userExist) throw new Error('User does not exist');

      const isMatch = await bcryptjs.compare(password, userExist.password);
      if (!isMatch) throw new Error('Password does not match');

      const token = createToken(userExist, 'LEGOSECRET', '24h');

      return { token };
    }
  }
};

export default resolvers;
