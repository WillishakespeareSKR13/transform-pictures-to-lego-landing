import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################
  type RoomSizesSizes {
    key: BoardSizeType
    width: Int
    height: Int
    max: Int
  }
  type RoomSizes {
    key: BoardType
    sizes: [RoomSizesSizes]
  }

  #######################INPUT#######################
  input InputRoomSizesSizes {
    key: ID
    width: Int
    height: Int
    max: Int
  }
  input InputRoomSizes {
    key: ID
    sizes: [InputRoomSizesSizes]
  }

  #######################QUERY#######################
  extend type Query {
    getRoomSizes: [RoomSizes]
    getRoomSizesById(id: ID!): RoomSizes
  }

  #######################MUTACION######################
  extend type Mutation {
    newRoomSizes(input: InputRoomSizes): RoomSizes
    updateRoomSizes(id: ID!, input: InputRoomSizes): RoomSizes
  }
`;

export default typeDefs;
