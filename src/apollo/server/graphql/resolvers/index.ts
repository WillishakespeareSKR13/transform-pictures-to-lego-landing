import { Resolvers } from '@apollo/client';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';

const resolvers: Resolvers = {
  Query: {
    ...User.Query,
    ...Role.Query,
    ...SaleOrder.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Role.Mutation,
    ...SaleOrder.Mutation
  }
};

export default resolvers;
