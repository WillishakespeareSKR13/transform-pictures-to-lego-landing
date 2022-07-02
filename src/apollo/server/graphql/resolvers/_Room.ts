import { Resolvers } from '@apollo/client';
import Room from '../../models/room';

const resolvers: Resolvers = {
  Query: {
    getRooms: async (_, __) => {
      const rooms = await Room.find().populate({
        path: 'offset',
        populate: {
          path: 'key'
        }
      });
      return rooms;
    },
    getRoomById: async (_, { id }) => {
      const room = await Room.findById(id).populate({
        path: 'offset',
        populate: {
          path: 'key'
        }
      });
      return room;
    }
  },
  Mutation: {
    newRoom: async (_, { input }) => {
      const { key } = input;
      const roomExist = await Room.findOne({
        key
      });
      if (roomExist) throw new Error('Room already exist');

      const room = await Room.create({
        ...input
      });
      const getRoom = await Room.findById(room.id).populate({
        path: 'offset',
        populate: {
          path: 'key'
        }
      });
      return getRoom;
    },
    updateRoom: async (_, { id, input }) => {
      const roomExist = await Room.findById(id);
      if (!roomExist) throw new Error('Room does not exist');

      const room = await Room.findByIdAndUpdate(id, input, {
        new: true
      });
      const getRoom = await Room.findById(room._id).populate({
        path: 'offset',
        populate: {
          path: 'key'
        }
      });
      return getRoom;
    },
    deleteRoom: async (_, { id }) => {
      const roomExist = await Room.findById(id);
      if (!roomExist) throw new Error('Room does not exist');

      const room = await Room.findByIdAndDelete(id);
      return room;
    }
  }
};

export default resolvers;
