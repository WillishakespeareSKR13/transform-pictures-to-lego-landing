import { Resolvers } from '@apollo/client';
import Products from '../../models/products';
import Store from '../../models/store';

const resolvers: Resolvers = {
  Query: {
    getProducts: async (_, { filter }) => {
      return await Products.find({
        ...filter
      }).populate({
        path: 'store',
        populate: {
          path: 'storeType'
        }
      });
    },
    getProductById: async (_, { id }) => {
      return await Products.findById(id).populate({
        path: 'store',
        populate: {
          path: 'storeType'
        }
      });
    }
  },
  Mutation: {
    newProduct: async (_, { input }) => {
      const { store } = input;
      const storeExist = await Store.findById(store).populate({
        path: 'storeType'
      });

      if (!storeExist) throw new Error('Store does not exist');

      const product = await Products.create({
        ...input,
        store: storeExist.id
      });
      return {
        ...product.toJSON(),
        store: storeExist
      };
    },
    updateProduct: async (_, { id, input }) => {
      const productExist = await Products.findById(id);
      if (!productExist) throw new Error('Product does not exist');

      const product = await Products.findByIdAndUpdate(id, input, {
        new: true
      });
      return product;
    }
  }
};

export default resolvers;
