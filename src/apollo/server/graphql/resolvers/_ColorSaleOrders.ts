import { Resolvers } from '@apollo/client';
import ColorSaleOrder from '../../models/colorSaleOrder';
import StoreType from '../../models/storeTypes';
import Store from '../../models/store';

const resolvers: Resolvers = {
  Query: {
    getColorSaleOrders: async (_, { filter }) => {
      const colorSaleOrders = await ColorSaleOrder.find({
        ...filter
      })
        .populate('store')
        .populate({
          path: 'colors',
          populate: {
            path: 'color'
          }
        });
      return colorSaleOrders;
    },
    getColorSaleOrderById: async (_, { id }) => {
      const colorSaleOrder = await ColorSaleOrder.findById(id)
        .populate('store')
        .populate({
          path: 'colors',
          populate: {
            path: 'color'
          }
        });
      return colorSaleOrder;
    }
  },
  Mutation: {
    newColorSaleOrder: async (_, { input }) => {
      const { store, colors } = input;

      const storeTypeExist = async () => {
        if (!store) {
          const typeExist = await StoreType.findOne({ name: 'WEBSITE' });
          if (!typeExist)
            throw new Error('First create a StoreType named WEBSITE');

          const storeExist = await Store.findOne({ storeType: typeExist.id });
          if (!storeExist) throw new Error('First create a Store');

          return storeExist;
        }

        const storeExist = await Store.findById(store);
        if (!storeExist) throw new Error('Store does not exist');
        return storeExist;
      };

      const getStore = await storeTypeExist();

      const colorSaleOrderCreated = await ColorSaleOrder.create({
        ...input,
        store: getStore._id,
        total: colors.reduce(
          (
            acc: number,
            curr: {
              quantity: number;
            }
          ) => acc + curr.quantity,
          0
        )
      });
      const getColorSaleOrder = await ColorSaleOrder.findById(
        colorSaleOrderCreated.id
      )
        .populate('store')
        .populate('colors.color');
      return getColorSaleOrder;
    },
    updateColorSaleOrder: async (_, { id, input }) => {
      const colorSaleOrderExist = await ColorSaleOrder.findById(id);
      if (!colorSaleOrderExist)
        throw new Error('ColorSaleOrder does not exist');

      const colorSaleOrderUpdated = await ColorSaleOrder.findByIdAndUpdate(
        id,
        input,
        {
          new: true
        }
      );
      return colorSaleOrderUpdated;
    },
    deleteColorSaleOrder: async (_, { id }) => {
      const colorSaleOrderExist = await ColorSaleOrder.findById(id);
      if (!colorSaleOrderExist)
        throw new Error('ColorSaleOrder does not exist');

      const colorSaleOrderDeleted = await ColorSaleOrder.findByIdAndDelete(id);
      return colorSaleOrderDeleted;
    }
  }
};

export default resolvers;
