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
import BoardSelected from './_BoardSelected';
import Room from './_Room';
import RoomSize from './_RoomSize';
import Colors from './_Colors';
import ColorSaleOrders from './_ColorSaleOrders';
import ProductQuantity from './_ProductsQuantity';

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
  ${BoardSelected}
  ${Room}
  ${RoomSize}
  ${Colors}
  ${ColorSaleOrders}
  ${ProductQuantity}

  type Query {
    ping: String
  }
  type Mutation {
    pong: String
  }
`;

export default typeDefs;
