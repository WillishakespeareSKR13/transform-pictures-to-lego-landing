import { Resolvers } from '@apollo/client';
import BoardType from '../../models/boardType';

const resolvers: Resolvers = {
  Query: {
    getBoardTypes: async (_, __) => {
      const boardTypes = await BoardType.find();
      return boardTypes;
    },
    getBoardTypeById: async (_, { id }) => {
      const boardType = await BoardType.findById(id);
      return boardType;
    }
  },
  Mutation: {
    newBoardType: async (_, { input }) => {
      const { name } = input;
      const boardTypeExist = await BoardType.findOne({ name });
      if (boardTypeExist) throw new Error('BoardType already exist');

      const boardType = await BoardType.create({
        ...input
      });
      return boardType;
    },
    updateBoardType: async (_, { id, input }) => {
      const boardTypeExist = await BoardType.findById(id);
      if (!boardTypeExist) throw new Error('BoardType does not exist');

      const boardType = await BoardType.findByIdAndUpdate(id, input, {
        new: true
      });
      return boardType;
    },
    deleteBoardType: async (_, { id }) => {
      const boardTypeExist = await BoardType.findById(id);
      if (!boardTypeExist) throw new Error('BoardType does not exist');

      const boardType = await BoardType.findByIdAndDelete(id);
      return boardType;
    }
  }
};

export default resolvers;
