import { Resolvers } from '@apollo/client';
import StoreType from '../../models/storeTypes';

const resolvers: Resolvers = {
  Query: {
    getStoreTypes: async (_, __) => {
      return await StoreType.find({});
    },
    getStoreTypeById: async (_, { id }) => {
      return await StoreType.findById(id);
    }
  },
  Mutation: {
    newStoreType: async (_, { input }) => {
      const { name } = input;
      const storeTypeExist = await StoreType.findOne({ name });
      if (storeTypeExist) throw new Error('StoreType already exist');

      const storeType = await StoreType.create({
        ...input
      });
      return storeType;
    },
    updateStoreType: async (_, { id, input }) => {
      const storeTypeExist = await StoreType.findById(id);
      if (!storeTypeExist) throw new Error('StoreType does not exist');

      const storeType = await StoreType.findByIdAndUpdate(id, input, {
        new: true
      });
      return storeType;
    },
    deleteStoreType: async (_, { id }) => {
      const storeTypeExist = await StoreType.findById(id);
      if (!storeTypeExist) throw new Error('StoreType does not exist');

      const storeType = await StoreType.findByIdAndDelete(id);
      return storeType;
    }
  }
};

export default resolvers;
