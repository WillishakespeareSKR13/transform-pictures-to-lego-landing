import { Resolvers } from '@apollo/client';
import BoardSize from '../../models/boardSize';
import BoardSizeType from '../../models/boardSizeType';
import Board from '../../models/board';

const resolvers: Resolvers = {
  Query: {
    getBoardSizes: async (_, __) => {
      const boardSizes = await BoardSize.find().populate('board').populate({
        path: 'type'
      });
      return boardSizes;
    },
    getBoardSizeById: async (_, { id }) => {
      const boardSize = await BoardSize.findById(id).populate({
        path: 'type',
        populate: {
          path: 'board'
        }
      });
      return boardSize;
    }
  },
  Mutation: {
    newBoardSize: async (_, { input }) => {
      const { aspect, title, board, type, x, y, isPortrait, size } = input;
      const boardExist = await Board.findById(board);
      if (!boardExist) throw new Error('Board does not exist');
      const boardTypeExist = await BoardSizeType.findById(type);
      if (!boardTypeExist) throw new Error('BoardSizeType does not exist');
      const boardSizeExist = await BoardSize.findOne({
        aspect,
        title,
        board,
        type,
        x,
        y,
        isPortrait,
        size
      });
      if (boardSizeExist) throw new Error('BoardSize already exist');

      const boardSize = await BoardSize.create({
        ...input
      });
      return boardSize;
    },
    updateBoardSize: async (_, { id, input }) => {
      const boardSizeExist = await BoardSize.findById(id);

      if (!boardSizeExist) throw new Error('BoardSize does not exist');
      const boardSize = await BoardSize.findByIdAndUpdate(id, input, {
        new: true
      });
      return boardSize;
    }
  }
};

export default resolvers;
