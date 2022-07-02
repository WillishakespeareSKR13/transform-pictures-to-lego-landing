import { Resolvers } from '@apollo/client';
import ProductQuantity from '../../models/productsQuantity';

const resolvers: Resolvers = {
  Query: {
    getProductQuantityBySaleOrder: async (_, { id }) => {
      if (!id) throw new Error('id is required');

      const productQuantity = await ProductQuantity.findOne({
        saleOrder: id
      });
      if (!productQuantity) throw new Error('ProductQuantity not found');
      return productQuantity;
    }
  }
};

export default resolvers;
