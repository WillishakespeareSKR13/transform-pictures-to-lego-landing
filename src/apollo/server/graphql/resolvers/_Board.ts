import { Resolvers } from '@apollo/client';
import BoardSize from '../../models/boardSize';
import Board from '../../models/board';

const resolvers: Resolvers = {
  Query: {
    getBoards: async (_, __) => {
      const boards = await Board.find().populate('type');
      const boardWithSize = boards.map(async (board) => {
        const boardToJson = board.toJSON();
        const boardSize = await BoardSize.find({
          board: boardToJson.id
        }).populate({
          path: 'type'
        });

        return {
          ...board.toJSON(),
          sizes: boardSize.map((e) => e.toJSON())
        };
      });
      return Promise.all(boardWithSize);
    },
    getBoardById: async (_, { id }) => {
      const board = await Board.findById(id).populate({
        path: 'boardtype'
      });
      const boardSize = await BoardSize.find({
        board: board._id
      }).populate({
        path: 'type'
      });
      return {
        ...board.toJSON(),
        sizes: boardSize
      };
    }
  },
  Mutation: {
    newBoard: async (_, { input }) => {
      const { title, description, image } = input;
      const boardExist = await Board.findOne({
        title,
        description,
        image
      });
      if (boardExist) throw new Error('Board already exist');
      const board = await Board.create({
        ...input
      });
      return board.toJSON();
    },
    updateBoard: async (_, { id, input }) => {
      const boardExist = await Board.findById(id);
      if (!boardExist) throw new Error('Board does not exist');
      const board = await Board.findByIdAndUpdate(id, input, {
        new: true
      });
      return board;
    }
  }
};

export default resolvers;
