import { Resolvers } from '@apollo/client';
import ColorSaleOrder from '../../models/colorSaleOrder';

const resolvers: Resolvers = {
  Query: {
    getColorSaleOrders: async (_, { filter }) => {
      const colorSaleOrders = await ColorSaleOrder.find({ ...filter });
      return colorSaleOrders;
    },
    getColorSaleOrderById: async (_, { id }) => {
      const colorSaleOrder = await ColorSaleOrder.findById(id);
      return colorSaleOrder;
    }
  },
  Mutation: {
    newColorSaleOrder: async (_, { input }) => {
      const { colorSaleOrder } = input;
      const colorSaleOrderExist = await ColorSaleOrder.findOne({
        colorSaleOrder
      });
      if (colorSaleOrderExist) throw new Error('ColorSaleOrder already exist');

      const colorSaleOrderCreated = await ColorSaleOrder.create({
        ...input
      });
      const getColorSaleOrder = await ColorSaleOrder.findById(
        colorSaleOrderCreated.id
      );
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
