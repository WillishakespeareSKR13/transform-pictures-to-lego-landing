import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type RoomOffSets {
    key: BoardType
    top: Int
  }

  type Room {
    id: ID
    key: String
    title: String
    image: String
    offset: [RoomOffSets]
  }

  #######################INPUT#######################

  input InputRoomOffSets {
    key: ID
    top: Int
  }

  input InputRoom {
    key: String
    title: String
    image: String
    offset: [InputRoomOffSets]
  }

  #######################QUERY#######################
  extend type Query {
    getRooms: [Room]
    getRoomById(id: ID!): Room
  }

  #######################MUTACION######################
  extend type Mutation {
    newRoom(input: InputRoom): Room
    updateRoom(id: ID!, input: InputRoom): Room
    deleteRoom(id: ID!): Room
  }
`;

export default typeDefs;
