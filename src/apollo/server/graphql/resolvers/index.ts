import { Resolvers } from '@apollo/client';
import User from './_User';
import Role from './_Role';
import SaleOrder from './_SaleOrder';
import StoreType from './_StoreType';
import Store from './_Store';
import Product from './_Products';
import BoardType from './_BoardType';
import BoardSizeType from './_BoardSizeType';
import BoardSize from './_BoardSize';
import Board from './_Board';
import Room from './_Room';
import RoomSizes from './_RoomSizes';
import Color from './_Color';

const resolvers: Resolvers = {
  Query: {
    ...User.Query,
    ...Role.Query,
    ...SaleOrder.Query,
    ...StoreType.Query,
    ...Store.Query,
    ...Product.Query,
    ...BoardType.Query,
    ...BoardSizeType.Query,
    ...BoardSize.Query,
    ...Board.Query,
    ...Room.Query,
    ...RoomSizes.Query,
    ...Color.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Role.Mutation,
    ...SaleOrder.Mutation,
    ...StoreType.Mutation,
    ...Store.Mutation,
    ...Product.Mutation,
    ...BoardType.Mutation,
    ...BoardSizeType.Mutation,
    ...BoardSize.Mutation,
    ...Board.Mutation,
    ...Room.Mutation,
    ...RoomSizes.Mutation,
    ...Color.Mutation
  }
};

export default resolvers;
