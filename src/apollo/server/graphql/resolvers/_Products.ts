import { Resolvers } from '@apollo/client';
import Products from '../../models/products';
import Store from '../../models/store';

const resolvers: Resolvers = {
  Query: {
    getProducts: async (_, { filter }) => {
      const { storeArray } = filter;
      const store = storeArray ? { store: { $in: storeArray } } : {};
      return await Products.find({
        ...filter,
        ...store
      })
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        })
        .populate({
          path: 'color'
        });
    },
    getProductById: async (_, { id }) => {
      return await Products.findById(id)
        .populate({
          path: 'store',
          populate: {
            path: 'storeType'
          }
        })
        .populate({
          path: 'color'
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
    },
    deleteProduct: async (_, { id }) => {
      const productExist = await Products.findById(id);
      if (!productExist) throw new Error('Product does not exist');

      const product = await Products.findByIdAndDelete(id);
      return product;
    }
  }
};

export default resolvers;
