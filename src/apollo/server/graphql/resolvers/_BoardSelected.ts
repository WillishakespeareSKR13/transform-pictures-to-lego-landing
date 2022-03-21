import { Resolvers } from '@apollo/client';
import BoardSelected from '../../models/boardSelected';

const resolvers: Resolvers = {
  Query: {
    getBoardSelecteds: async (_, __) => {
      const boardTypes = await BoardSelected.find();
      return boardTypes;
    },
    getBoardSelectedById: async (_, { id }) => {
      const boardType = await BoardSelected.findById(id);
      return boardType;
    }
  },
  Mutation: {
    newBoardSelected: async (_, { input }) => {
      const { name } = input;
      const boardTypeExist = await BoardSelected.findOne({ name });
      if (boardTypeExist) throw new Error('BoardSelected already exist');

      const boardType = await BoardSelected.create({
        ...input
      });
      return boardType;
    },
    updateBoardSelected: async (_, { id, input }) => {
      const boardTypeExist = await BoardSelected.findById(id);
      if (!boardTypeExist) throw new Error('BoardSelected does not exist');

      const boardType = await BoardSelected.findByIdAndUpdate(id, input, {
        new: true
      });
      return boardType;
    },
    deleteBoardSelected: async (_, { id }) => {
      const boardTypeExist = await BoardSelected.findById(id);
      if (!boardTypeExist) throw new Error('BoardSelected does not exist');

      const boardType = await BoardSelected.findByIdAndDelete(id);
      return boardType;
    }
  }
};

export default resolvers;
