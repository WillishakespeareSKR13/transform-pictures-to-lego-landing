import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Board {
    id: ID
    type: BoardType
    price: Float
    currency: String
    title: String
    description: String
    image: String
    sizes: [BoardSize]
  }

  #######################INPUT#######################

  input InputBoard {
    type: ID
    price: Float
    currency: String
    title: String
    description: String
    image: String
  }

  #######################QUERY#######################
  extend type Query {
    getBoards: [Board]
    getBoardById(id: ID!): Board
  }

  #######################MUTACION######################
  extend type Mutation {
    newBoard(input: InputBoard): Board
    updateBoard(id: ID!, input: InputBoard): Board
  }
`;

export default typeDefs;
