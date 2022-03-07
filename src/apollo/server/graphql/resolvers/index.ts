import { Resolvers } from '@apollo/client';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';
import StoreType from './_StoreType';
import Store from './_Store';
import Product from './_Products';

const resolvers: Resolvers = {
  Query: {
    ...User.Query,
    ...Role.Query,
    ...SaleOrder.Query,
    ...StoreType.Query,
    ...Store.Query,
    ...Product.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Role.Mutation,
    ...SaleOrder.Mutation,
    ...StoreType.Mutation,
    ...Store.Mutation,
    ...Product.Mutation
  }
};

export default resolvers;
