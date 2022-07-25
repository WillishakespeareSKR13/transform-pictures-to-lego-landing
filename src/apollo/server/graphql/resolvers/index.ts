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
import ColorSaleOrder from './_ColorSaleOrders';
import ProductQuantity from './_ProductsQuantity';
import TermsConditions from './_TermsConditions';

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
    ...Color.Query,
    ...ColorSaleOrder.Query,
    ...ProductQuantity.Query,
    ...TermsConditions.Query
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
    ...Color.Mutation,
    ...ColorSaleOrder.Mutation,
    ...ProductQuantity.Mutation,
    ...TermsConditions.Mutation
  }
};

export default resolvers;
