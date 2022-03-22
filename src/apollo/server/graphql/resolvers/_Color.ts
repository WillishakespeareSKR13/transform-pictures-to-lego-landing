import { Resolvers } from '@apollo/client';
import Colors from '../../models/colors';

const resolvers: Resolvers = {
  Query: {
    getColors: async (_, { filter }) => {
      const colors = await Colors.find({ ...filter });
      return colors;
    },
    getColorById: async (_, { id }) => {
      const color = await Colors.findById(id);
      return color;
    }
  },
  Mutation: {
    newColor: async (_, { input }) => {
      const { color } = input;
      const colorExist = await Colors.findOne({ color });
      if (colorExist) throw new Error('Color already exist');

      const colorCreated = await Colors.create({
        ...input
      });
      const getColor = await Colors.findById(colorCreated.id);
      return getColor;
    },
    updateColor: async (_, { id, input }) => {
      const colorExist = await Colors.findById(id);
      if (!colorExist) throw new Error('Color does not exist');

      const colorUpdated = await Colors.findByIdAndUpdate(id, input, {
        new: true
      });
      return colorUpdated;
    },
    deleteColor: async (_, { id }) => {
      const colorExist = await Colors.findById(id);
      if (!colorExist) throw new Error('Color does not exist');

      const colorDeleted = await Colors.findByIdAndDelete(id);
      return colorDeleted;
    }
  }
};

export default resolvers;
