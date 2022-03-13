import { Resolvers } from '@apollo/client';
import BoardSizeType from '../../models/boardSizeType';

const resolvers: Resolvers = {
  Query: {
    getBoardSizeTypes: async (_, __) => {
      const boardSizeTypes = await BoardSizeType.find();
      return boardSizeTypes;
    },
    getBoardSizeTypeById: async (_, { id }) => {
      const boardSizeType = await BoardSizeType.findById(id);
      return boardSizeType;
    }
  },
  Mutation: {
    newBoardSizeType: async (_, { input }) => {
      const { name } = input;
      const boardSizeTypeExist = await BoardSizeType.findOne({ name });
      if (boardSizeTypeExist) throw new Error('BoardSizeType already exist');

      const boardSizeType = await BoardSizeType.create({
        ...input
      });
      return boardSizeType;
    },
    updateBoardSizeType: async (_, { id, input }) => {
      const boardSizeTypeExist = await BoardSizeType.findById(id);
      if (!boardSizeTypeExist) throw new Error('BoardSizeType does not exist');

      const boardSizeType = await BoardSizeType.findByIdAndUpdate(id, input, {
        new: true
      });
      return boardSizeType;
    }
  }
};

export default resolvers;
