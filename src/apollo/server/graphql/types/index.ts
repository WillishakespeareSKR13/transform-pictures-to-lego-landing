import { gql } from 'apollo-server-micro';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';
import StoreTypes from './_StoreTypes';
import Store from './_Store';
import Product from './_Products';
import BoardType from './_BoardType';
import BoardSizeType from './_BoardSizeType';
import BoardSize from './_BoardSize';
import Board from './_Board';
import Room from './_Room';
import RoomSize from './_RoomSize';

const typeDefs = gql`
  ${User}
  ${Role}
  ${SaleOrder}
  ${StoreTypes}
  ${Store}
  ${Product}
  ${BoardType}
  ${BoardSizeType}
  ${BoardSize}
  ${Board}
  ${Room}
  ${RoomSize}

  type Query {
    ping: String
  }
  type Mutation {
    pong: String
  }
`;

export default typeDefs;
