import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Board {
    id: ID
    type: BoardType
    currency: String
    title: String
    description: String
    image: String
    sizes: [BoardSize]
  }

  #######################INPUT#######################

  input InputBoard {
    type: ID
    currency: String
    title: String
    description: String
    image: String
  }

  input FilterBoard {
    id: ID
    type: FilterBoardType
    currency: String
    title: String
    description: String
    image: String
    sizes: [FilterBoardSize]
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
