import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type BoardSize {
    id: ID
    aspect: Float
    title: String
    board: Board
    type: BoardSizeType
    x: Int
    y: Int
    price: Int
    priority: Int
    isPortrait: Boolean
    size: sizeBoard
  }

  type sizeBoard {
    width: String
    height: String
  }
  #######################INPUT#######################

  input InputSizeBoard {
    width: String
    height: String
  }

  input InputBoardSize {
    aspect: Float
    title: String
    board: ID
    type: ID
    x: Int
    y: Int
    price: Int
    priority: Int
    isPortrait: Boolean
    size: InputSizeBoard
  }

  input FilterSizeBoard {
    width: String
    height: String
  }

  input FilterBoardSize {
    id: ID
    aspect: Float
    title: String
    board: FilterBoard
    type: FilterBoardSizeType
    x: Int
    y: Int
    price: Int
    priority: Int
    isPortrait: Boolean
    size: FilterSizeBoard
  }

  #######################QUERY#######################
  extend type Query {
    getBoardSizes: [BoardSize]
    getBoardSizeById(id: ID!): BoardSize
  }

  #######################MUTACION######################
  extend type Mutation {
    newBoardSize(input: InputBoardSize): BoardSize
    updateBoardSize(id: ID!, input: InputBoardSize): BoardSize
  }
`;

export default typeDefs;
