import { Resolvers } from '@apollo/client';
import Store from '../../models/store';
import StoreType from '../../models/storeTypes';

const resolvers: Resolvers = {
  Query: {
    getStores: async (_, __) => {
      return await Store.find({}).populate('storeType');
    },
    getStoreById: async (_, { id }) => {
      return await Store.findById(id).populate('storeType');
    }
  },
  Mutation: {
    newStore: async (_, { input }) => {
      const { name, storeType } = input;
      const typeExist = async () => {
        if (!storeType) {
          const typeExist = await StoreType.findOne({ name: 'WEBSITE' });
          if (!typeExist)
            throw new Error('First create a StoreType named WEBSITE');
          return typeExist;
        }
        const storeTypeExist = await StoreType.findById(storeType);
        if (!storeTypeExist) throw new Error('StoreType does not exist');
        return storeTypeExist;
      };

      const storeTypeExist = await typeExist();

      const storeExist = await Store.findOne({ name });
      if (storeExist) throw new Error('Store already exist');

      const store = await Store.create({
        ...input,
        storeType: storeTypeExist.id
      });
      const getStore = await Store.findById(store.id).populate('storeType');
      return getStore;
    },
    updateStore: async (_, { id, input }) => {
      const storeExist = await Store.findById(id);
      if (!storeExist) throw new Error('Store does not exist');

      const store = await Store.findByIdAndUpdate(id, input, {
        new: true
      });
      const getStore = await Store.findById(store.id).populate('storeType');
      return getStore;
    },
    deleteStore: async (_, { id }) => {
      const storeExist = await Store.findById(id);
      if (!storeExist) throw new Error('Store does not exist');

      const store = await Store.findByIdAndDelete(id);
      return store;
    }
  }
};

export default resolvers;
