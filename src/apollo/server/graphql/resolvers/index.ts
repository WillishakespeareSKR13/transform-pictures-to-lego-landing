import { Resolvers } from '@apollo/client';
import User from './User';
import Role from './Role';

const resolvers: Resolvers = {
  Query: {
    ...User.Query,
    ...Role.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Role.Mutation
  }
};

export default resolvers;
