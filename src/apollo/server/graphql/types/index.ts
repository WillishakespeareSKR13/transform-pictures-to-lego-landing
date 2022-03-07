import { gql } from 'apollo-server-micro';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';
import StoreTypes from './_StoreTypes';
import Store from './_Store';
import Product from './_Products';

const typeDefs = gql`
  ${User}
  ${Role}
  ${SaleOrder}
  ${StoreTypes}
  ${Store}
  ${Product}

  type Query {
    ping: String
  }
  type Mutation {
    pong: String
  }
`;

export default typeDefs;
