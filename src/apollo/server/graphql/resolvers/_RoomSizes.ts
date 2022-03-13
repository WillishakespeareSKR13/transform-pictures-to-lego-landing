import { Resolvers } from '@apollo/client';
import RoomSizes from '../../models/roomSizes';

const resolvers: Resolvers = {
  Query: {
    getRoomSizes: async (_, __) => {
      const roomSizes = await RoomSizes.find()
        .populate('key')
        .populate({
          path: 'sizes',
          populate: {
            path: 'key'
          }
        });
      return roomSizes;
    },
    getRoomSizesById: async (_, { id }) => {
      const roomSize = await RoomSizes.findById(id)
        .populate('key')
        .populate({
          path: 'sizes',
          populate: {
            path: 'key'
          }
        });
      return roomSize;
    }
  },
  Mutation: {
    newRoomSizes: async (_, { input }) => {
      const { key } = input;
      const roomSizeExist = await RoomSizes.findOne({
        key
      });
      if (roomSizeExist) throw new Error('Room size already exist');

      const roomSize = await RoomSizes.create({
        ...input
      });
      const getRoomSize = await RoomSizes.findById(roomSize.id)
        .populate('key')
        .populate({
          path: 'sizes',
          populate: {
            path: 'key'
          }
        });
      return getRoomSize.toJSON();
    },
    updateRoomSizes: async (_, { id, input }) => {
      const roomSizeExist = await RoomSizes.findById(id);
      if (!roomSizeExist) throw new Error('Room size does not exist');

      const roomSize = await RoomSizes.findByIdAndUpdate(id, input, {
        new: true
      });
      return roomSize;
    }
  }
};

export default resolvers;
